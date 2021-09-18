import { Query, Resolver } from '@nestjs/graphql';

// Services
import PetsService from './pets.service';
import PetEntity from './pet.entity';

@Resolver(of => PetEntity)
class PetsResolver {
    constructor(private petsService: PetsService) {}

    @Query(returns => [PetEntity])
    public async pets(): Promise<PetEntity[]> {
        return this.petsService.findAll();
    } 
}

export default PetsResolver;
