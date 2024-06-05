import { LoaderFunction } from "react-router-dom";
import { Dispatch } from "@reduxjs/toolkit";

export type TLoaderFactory = (params: { dispatch: Dispatch<any> }) => LoaderFunction;