import { Injectable } from '@nestjs/common';

// Entities and Models  
import PetEntity from './pet.entity';

@Injectable()
class PetsService {
    public async findAll(): Promise<PetEntity[]> {
        const pet = new PetEntity();
        pet.id = 1;
        pet.name = 'Max';

        return [pet] as PetEntity[];
    }
}

export default PetsService;
