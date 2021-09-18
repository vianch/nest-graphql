import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
class PetEntity {
    @Field(type => Int)
    id: number;

    @Field()
    name: string;

    @Field({ nullable: true })
    type?: string;;
}

export default PetEntity;