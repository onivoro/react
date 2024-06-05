import { RouteObject } from "react-router-dom";
import { TLoaderFactory } from "./loader-factory.type";

export type TRoute = RouteObject & { loaderFactory: TLoaderFactory };