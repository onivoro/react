import { Dispatch } from "@reduxjs/toolkit";
import { RouteObject } from "react-router-dom";
import { TRoute } from '../types/route.type';

export function hydrateLoaderFactory(route: TRoute | RouteObject, dispatch: Dispatch<any>, _useNavigate: any) {
  return {
    ...route,
    loader: (typeof (route as TRoute).loaderFactory === 'undefined')
      ? route.loader
      : (route as TRoute).loaderFactory({
        dispatch
      })
  };
}