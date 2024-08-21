import express from "express";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
app.set("port", 4000);
app.set("view engine", "html");
app.set("views", path.join(__dirname, "views"));

// Using Middlewares
app.use(express.static(path.join(__dirname, "public")));
const errorPg = path.join(__dirname, "/views/error-404.html");
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        objectSrc: ["'none'"],
        scriptSrcAttr: ["'unsafe-inline'"],
        imgSrc: [
          "'self'",
          "https://cruzimex.com/",
          "https://www.hansa.com.bo/",
          "https://www.proesabol.com/",
          "https://robohash.org/",
        ],
        scriptSrc: [
          "'self'",
          "https://cdn.jsdelivr.net/",
          "https://cdnjs.cloudflare.com/",
        ],
        styleSrc: ["'self'", "https: 'unsafe-inline'"],
        upgradeInsecureRequests: [],
      },
    },
  })
);
app.use(
  cors({
    methods: ["GET", "POST", "PUT", "DELETE"],
    origin: "*",
  })
);

//Rutas
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/home.html");
});
app.get("*", (req, res) => {
  res.status(404).sendFile(errorPg);
});

app.listen(app.get("port"), () => {
  console.log(`Server is running on port: ${app.get("port")}`);
});
