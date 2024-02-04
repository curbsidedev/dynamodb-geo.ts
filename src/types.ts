import {
  AttributeValue,
  DeleteItemCommandInput,
  GetItemCommandInput,
  PutRequest,
  QueryCommandInput,
  UpdateItemCommandInput,
} from "@aws-sdk/client-dynamodb";

export interface BatchWritePointOutput extends DynamoDB.BatchWriteItemOutput {
}

export interface DeletePointInput {
  RangeKeyValue: AttributeValue;
  GeoPoint: GeoPoint;
  DeleteItemInput?: DeleteItemCommandInput
}
export interface DeletePointOutput extends DynamoDB.DeleteItemOutput {
}

export interface GeoPoint {
  latitude: number;
  longitude: number;
}
export interface GeoQueryInput {
  QueryInput?: QueryCommandInput;
}
export interface GeoQueryOutput extends DynamoDB.QueryOutput {
}
export interface GetPointInput {
  RangeKeyValue: AttributeValue;
  GeoPoint: GeoPoint;
  GetItemInput: GetItemCommandInput;
}
export interface GetPointOutput extends DynamoDB.GetItemOutput {
}
export interface PutPointInput {
  RangeKeyValue: AttributeValue;
  GeoPoint: GeoPoint;
  PutItemInput: PutRequest;
}
export interface PutPointOutput extends DynamoDB.PutItemOutput {
}
export interface QueryRadiusInput extends GeoQueryInput {
  RadiusInMeter: number;
  CenterPoint: GeoPoint;
}
export interface QueryRadiusOutput extends GeoQueryOutput {
}
export interface QueryRectangleInput extends GeoQueryInput {
  MinPoint: GeoPoint;
  MaxPoint: GeoPoint;
}
export interface QueryRectangleOutput extends GeoQueryOutput {
}
export interface UpdatePointInput {
  RangeKeyValue: AttributeValue;
  GeoPoint: GeoPoint;
  UpdateItemInput: UpdateItemCommandInput;
}
export interface UpdatePointOutput extends DynamoDB.UpdateItemOutput {
}
