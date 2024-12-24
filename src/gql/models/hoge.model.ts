import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Hoge {
    @Field(() => String)
    id?: string;
}
