import { QueryRadiusInput, QueryRectangleInput } from "../types";
import S2 from "@radarlabs/s2";

export class S2Util {
  public static latLngRectFromQueryRectangleInput(
    geoQueryRequest: QueryRectangleInput
  ): S2.Polyline {
    const queryRectangleRequest = geoQueryRequest as QueryRectangleInput;

    const minPoint = new S2.LatLng(
      queryRectangleRequest.MinPoint.latitude,
      queryRectangleRequest.MinPoint.longitude
    );
    const maxPoint = new S2.LatLng(
      queryRectangleRequest.MaxPoint.latitude,
      queryRectangleRequest.MaxPoint.longitude
    );

    let latLngRect: S2.Polyline = null;

    if (minPoint != null && maxPoint != null) {
      latLngRect = new S2.Polyline([minPoint, maxPoint]);
    }

    return latLngRect;
  }

  // public static getBoundingLatLngRectFromQueryRadiusInput(
  //   geoQueryRequest: QueryRadiusInput
  // ): S2.Polyline {
  //   const centerPoint = geoQueryRequest.CenterPoint;
  //   const radiusInMeter = geoQueryRequest.RadiusInMeter;

  //   const centerLatLng = centerPoint;

  //   const latReferenceUnit = centerPoint.latitude > 0.0 ? -1.0 : 1.0;
  //   const latReferenceLatLng = new S2.LatLng(
  //     centerPoint.latitude + latReferenceUnit,
  //     centerPoint.longitude
  //   );
  //   const lngReferenceUnit = centerPoint.longitude > 0.0 ? -1.0 : 1.0;
  //   const lngReferenceLatLng = new S2.LatLng(
  //     centerPoint.latitude,
  //     centerPoint.longitude + lngReferenceUnit
  //   );

  //   const latForRadius =
  //     radiusInMeter /
  //     S2.Earth.getDistanceMeters(centerLatLng, latReferenceLatLng);
  //   const lngForRadius =
  //     radiusInMeter /
  //     S2.Earth.getDistanceMeters(centerLatLng, lngReferenceLatLng);

  //   const minLatLng = new S2.LatLng(
  //     centerPoint.latitude - latForRadius,
  //     centerPoint.longitude - lngForRadius
  //   );
  //   const maxLatLng = new S2.LatLng(
  //     centerPoint.latitude + latForRadius,
  //     centerPoint.longitude + lngForRadius
  //   );

  //   return new S2.Polyline([minLatLng, maxLatLng]);
  // }
}
