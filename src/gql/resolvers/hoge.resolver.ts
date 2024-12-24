import { Query, Resolver } from "@nestjs/graphql";
import { Hoge } from "../models/hoge.model";

@Resolver(() => Hoge)
export class HogeResolver {
    @Query(() => Hoge)
    async hoge(): Promise<Hoge> {
        return { id: '1' };
    }
}
