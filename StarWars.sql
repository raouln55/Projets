create type Colors as enum ('green', 'brown', 'tan', 'yellow', 'blue', 'magenta', 'red', 'pale', 'grey', 'purple', 'pink', 'orange', 'pale pink',
    'dark', 'white', 'gray', 'black', 'blond', 'hazel', 'indigo', 'silver', 'golden', 'amber' );

create table Living_Beings (
    Id serial constraint Living_Beings_pk primary key,
    name_Species varchar, name_Characters varchar, gender varchar, height int, mass int, homeworld varchar, species varchar, hair_color Colors, skin_color Colors,
    eye_color Colors, birth_year varchar, classification varchar, designation varchar, language varchar, average_height int, skin_colors Colors, hair_colors Colors, eye_colors Colors,
    average_lifespan int, homeworld_Species varchar,
    PlanetsId serial constraint PlanetsId_fk references Planets on delete cascade
);

create table Planets (
    Id serial constraint Planets_pk primary key,
    name varchar, rotation_period int, orbital_period int, diameter int, climate varchar, gravity varchar, terrain varchar, surface_water int, population int
);

create table Transport_Possibilities (
    Id serial constraint Transport_Possibilities_pk primary key,
    name_Starships varchar, name_Vehicles varchar, model_Starships varchar, model_Vehicles varchar, crew_Starships int, crew_Vehicles int,
    length_Starships int, length_Vehicles int, passengers_Starships int, passengers_Vehicles int, cargo_capacity_Starships int, cargo_capacity_Vehicles int,
    cost_in_credits_Starships int, cost_in_credits_Vehicles int, starships_class varchar, vehicle_class varchar, consumables_Starships varchar, consumables_Vehicles varchar,
    manufacturer_Starships varchar, manufacturer_Vehicles varchar, max_atmosphering_speed_Starships int, max_atmosphering_speed_Vehicles int, hyperdrive_rating float, MGLT int
);