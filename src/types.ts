import {
  AttributeValue,
  DeleteItemCommandInput,
  GetItemCommandInput,
  PutRequest,
  QueryCommandInput,
  UpdateItemCommandInput,
  DeleteItemCommandOutput,
  BatchWriteItemCommandOutput,
  GetItemCommandOutput,
  PutItemCommandOutput,
  UpdateItemCommandOutput,
  QueryCommandOutput,
} from "@aws-sdk/client-dynamodb";
import S2 from "@radarlabs/s2";

export interface BatchWritePointOutput
  extends Promise<BatchWriteItemCommandOutput> {}

export interface DeletePointInput {
  RangeKeyValue: AttributeValue;
  GeoPoint: GeoPoint;
  DeleteItemInput?: DeleteItemCommandInput;
}
export interface DeletePointOutput extends Promise<DeleteItemCommandOutput> {}

export interface GeoPoint extends S2.LatLng {}
export interface GeoQueryInput {
  QueryInput?: QueryCommandInput;
}
export interface GeoQueryOutput extends Promise<QueryCommandOutput> {}
export interface GetPointInput {
  RangeKeyValue: AttributeValue;
  GeoPoint: GeoPoint;
  GetItemInput: GetItemCommandInput;
}
export interface GetPointOutput extends Promise<GetItemCommandOutput> {}
export interface PutPointInput {
  RangeKeyValue: AttributeValue;
  GeoPoint: GeoPoint;
  PutItemInput: PutRequest;
}
export interface PutPointOutput extends Promise<PutItemCommandOutput> {}
export interface QueryRadiusInput extends GeoQueryInput {
  RadiusInMeter: number;
  CenterPoint: GeoPoint;
}
export interface QueryRadiusOutput extends GeoQueryOutput {}
export interface QueryRectangleInput extends GeoQueryInput {
  MinPoint: GeoPoint;
  MaxPoint: GeoPoint;
}
export interface QueryRectangleOutput extends GeoQueryOutput {}
export interface UpdatePointInput {
  RangeKeyValue: AttributeValue;
  GeoPoint: GeoPoint;
  UpdateItemInput: UpdateItemCommandInput;
}
export interface UpdatePointOutput extends Promise<UpdateItemCommandOutput> {}
