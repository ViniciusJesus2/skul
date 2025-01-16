function scrollToSection() {
    document.getElementById("second_section").scrollIntoView({ behavior: "smooth" });
}

function scrollNextSection(){
    document.getElementById("third_section").scrollIntoView({behavior: "smooth"})
}

document.addEventListener("DOMContentLoaded", function () {
    const comunSkuls = [
        {
            nome: "Caveira de Carleon",
            evolucoes: ["Carleon_Recruit_Sprite.webp", "Carleon_Sergeant_Sprite.webp", "Carleon_Officer_Sprite.webp", "Carleon_Commander_Sprite.webp"]
        },
        {
            nome: " Caveira Ent",
            evolucoes: ["Ent_Skull_Sprite.webp", "Old_Ent_Skull_Sprite.webp", "Huge_Ent_Skull_Sprite.webp", "Elder_Ent_Skull_Sprite.webp"]
        },
        {
            nome: "Coveiro",
            evolucoes: ["Grave_Digger_Sprite.webp", "Undertaker_Sprite.webp", "Soul_Bearer_Sprite.webp", "Saviour_Sprite.webp"]
        },
        {
            nome: "Mago",
            evolucoes: ["Mage_Sprite.webp", "Grand_Mage_Sprite.webp", "Archmage_Sprite.webp", "Sage_Sprite.webp"]
        },
        {
            nome: "Ladrão",
            evolucoes: ["Petty_Thief_Sprite.webp", "Thief_Sprite.webp", "Wanderer_Sprite.webp", "Outlaw_Sprite.webp"]
        },
        {
            nome: "Piqueiro",
            evolucoes: ["Skeleton-Pike_Sprite.webp", "Foot_Soldier_Sprite.webp", "Pikeman_Sprite.webp", "Pikeman_Captain_Sprite.webp"]
        },
        {
            nome: "Esqueleto de Escudo",
            evolucoes: ["Skeleton-Shield_Sprite.webp", "Shield_Bearer_Sprite.webp", "Guardian_Sprite.webp", "Guardian_Commander_Sprite.webp"]
        },
        {
            nome: "Esqueleto de Espada",
            evolucoes: ["Skeleton-Sword_Sprite.webp", "Guard_Sprite.webp", "Royal_Guard_Sprite.webp", "Royal_Guard_Captain_Sprite.webp"]
        },
        {
            nome: "Macaco de Pedra",
            evolucoes: ["Stone_Monkey_Sprite.webp", "Monkey_King_Sprite.webp", "Immortal_King_Sprite.webp", "Overlord_Sprite.webp"]
        },
        {
            nome: "Lobisomem",
            evolucoes: ["Werewolf_Sprite.webp", "Elder_Werewolf_Sprite.webp", "Alpha_Werewolf_Sprite.webp", "Eternal_Werewolf_Sprite.webp"]
        },
        {
            nome: "Viking",
            evolucoes: ["Viking.webp", "Old_Viking.webp", "Chief_Sprite.webp", "Thunderlord_Sprite.webp" ]
        },
        {
            nome: "Escravo",
            evolucoes: ["Slave.webp", "Swordsman.webp", "Warmonger.webp", "Demigod.webp"]
        }
    ];

    const gliderContainer = document.querySelector('.glider');

    comunSkuls.forEach((skul) => {
        const skulGroup = document.createElement("div");
        skulGroup.classList.add("skul-group");

        const skulTitle = document.createElement("h3");
        skulTitle.classList.add("skul-title");
        skulTitle.textContent = skul.nome;
        skulGroup.appendChild(skulTitle);

        const skulSlide = document.createElement("div");
        skulSlide.classList.add("skul-slide");

        skul.evolucoes.forEach((imagem, index) => {
            const imgContainer = document.createElement("div");
            imgContainer.classList.add("img-container");

            const img = document.createElement("img");
            img.src = `img/skuls/${imagem}`;
            img.alt = skul.nome;

            const p = document.createElement("p");
            p.classList.add("text_glider");
            p.textContent = ["Base", "10 ossos", "30 ossos", "100 ossos"][index];

            imgContainer.appendChild(img);
            imgContainer.appendChild(p);
            skulSlide.appendChild(imgContainer);
        });

        skulGroup.appendChild(skulSlide);
        gliderContainer.appendChild(skulGroup);
    });

    // Inicializa o Glider após adicionar os elementos
    new Glider(gliderContainer, {
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        dots: '.dots',
        arrows: {
            prev: '.glider-prev',
            next: '.glider-next'
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const rareSkuls = [
        {
            nome: "Alquimista",
            evolucoes: ["Alchemist_Sprite.webp", "Grand_Alchemist_Sprite.webp", "Dark_Alchemist_Sprite.webp"]
        },
        {
            nome: "Palhaço",
            evolucoes: ["Clown_Sprite.webp", "Pierrot_Sprite.webp", "Joker_Sprite.webp"]
        },
        {
            nome: "Caveira de Gelo",
            evolucoes: ["Frost_Skull_Sprite.webp", "Ancient_Frost_Skull_Sprite.webp", "Frozen_Soul_Sprite.webp"]
        },
        {
            nome: "Gargula",
            evolucoes: ["Gargoyle_Sprite.webp", "Bronze_Gargoyle_Sprite.webp", "Golden_Gargoyle_Sprite.webp"]
        },
        {
            nome: "Gênio",
            evolucoes: ["Gene_Sprite.webp", "Apprentice_Gene_Sprite.webp", "Magnifico_Sprite.webp"]
        },
        {
            nome: "Ghoul",
            evolucoes: ["Ghoul_Sprite.webp", "Ghoooul_Sprite.webp", "Ghoooooul_Sprite.webp"]
        },
        {
            nome: "Arqueiro",
            evolucoes: ["Hunter_Sprite.webp", "Bow_Master_Sprite.webp", "Sniper_Sprite.webp"]
        },
        {
            nome: "Minotauro",
            evolucoes: ["Minotaurus_Sprite.webp", "Minotaurus_II_Sprite.webp", "Minotaurus_III_Sprite.webp"]
        },
        {
            nome: "Mumia",
            evolucoes: ["Mummy_Sprite.webp", "Mummy_Sprite.webp", "Mummy_Sprite.webp"]
        },
        {
            nome: "Motoqueiro",
            evolucoes: ["Rider_Sprite.webp", "Phantom_Rider_Sprite.webp", "Nightmare_Sprite.webp"]
        },
        {
            nome: "Esqueleto Bombardeiro",
            evolucoes: ["Skeleton-Bomber_Sprite.webp", "Skeleton_Bomber_Sprite.webp", "Demolitions_Expert_Sprite.webp"]
        },
        {
            nome: "Guerreiro",
            evolucoes: ["Warrior_Sprite.webp", "Gladiator_Sprite.webp", "Warlord_Sprite.webp"]
        },
        {
            nome: "Caveira de Água",
            evolucoes: ["Water_Skull_Sprite.webp", "Aqua_Skull_Sprite.webp", "Poseidon_Sprite.webp"]
        },
        {
            nome: "Oficial",
            evolucoes: ["Officer_Sprite.webp", "General.webp", "God_of_War_Sprite.webp"]
        }
    ];

    const gliderContainer = document.querySelector('.glider1');

    if(!gliderContainer) {
        console.error("Elemento .glider1 não encontrado!");
        return;
    }

    rareSkuls.forEach((skul) => {
        const skulGroup = document.createElement("div");
        skulGroup.classList.add("skul-group");

        const skulTitle = document.createElement("h3");
        skulTitle.classList.add("skul-title");
        skulTitle.textContent = skul.nome;
        skulGroup.appendChild(skulTitle);

        const skulSlide = document.createElement("div");
        skulSlide.classList.add("skul-slide");

        skul.evolucoes.forEach((imagem, index) => {
            const imgContainer = document.createElement("div");
            imgContainer.classList.add("img-container");

            const img = document.createElement("img");
            img.src = `img/skuls/${imagem}`;
            img.alt = skul.nome;

            const p = document.createElement("p");
            p.classList.add("text_glider");
            p.textContent = ["Base", "30 ossos", "100 ossos"][index];

            imgContainer.appendChild(img);
            imgContainer.appendChild(p);
            skulSlide.appendChild(imgContainer);
        });

        skulGroup.appendChild(skulSlide);
        gliderContainer.appendChild(skulGroup);
    });

    // Inicializa o Glider após adicionar os elementos
    new Glider(gliderContainer, {
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        dots: '.dots1',
        arrows: {
            prev: '.glider-prev1',
            next: '.glider-next1'
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const uniqueSkuls = [
        {
            nome: "Berseker",
            evolucoes: ["Berserker_Sprite.webp", "Devil_Berserker_Sprite.webp"]
        },
        {
            nome: "Paladino das Trevas",
            evolucoes: ["Dark_Paladin_Sprite.webp", "Dark_Avenger_Sprite.webp"]
        },
        {
            nome: "Grande Bruxo",
            evolucoes: ["Great_Warlock_Sprite.webp", "Abyssal_Monarch_Sprite.webp"]
        },
        {
            nome: "Armadura Viva",
            evolucoes: ["Living_Armor_Sprite.webp", "Soul_Knight_Sprite.webp"]
        },
        {
            nome: "Ninja",
            evolucoes: ["Ninja_Sprite.webp", "Ninja_Master_Sprite.webp"]
        },
        {
            nome: "Predador",
            evolucoes: ["Predator_Sprite.webp", "Destroyer_Sprite.webp"]
        },
        {
            nome: "Prisioneiro",
            evolucoes: ["Prisoner_Sprite.webp", "The_King_Sprite.webp"]
        },
        {
            nome: "Estrela do Rock",
            evolucoes: ["Rock_Star_Sprite.webp", "Super_Rock_Star_Sprite.webp"]
        },
        {
            nome: "Samurai",
            evolucoes: ["Samurai_Sprite.webp", "Neo_Samurai_Sprite.webp"]
        },
        {
            nome: "Ascético",
            evolucoes: ["Ascetic_Sprite.webp", "The_Absolute.webp"]
        }
    ];

    const gliderContainer = document.querySelector('.glider2');

    if(!gliderContainer) {
        console.error("Elemento .glider2 não encontrado!");
        return;
    }

    uniqueSkuls.forEach((skul) => {
        const skulGroup = document.createElement("div");
        skulGroup.classList.add("skul-group");

        const skulTitle = document.createElement("h3");
        skulTitle.classList.add("skul-title");
        skulTitle.textContent = skul.nome;
        skulGroup.appendChild(skulTitle);

        const skulSlide = document.createElement("div");
        skulSlide.classList.add("skul-slide");

        skul.evolucoes.forEach((imagem, index) => {
            const imgContainer = document.createElement("div");
            imgContainer.classList.add("img-container");

            const img = document.createElement("img");
            img.src = `img/skuls/${imagem}`;
            img.alt = skul.nome;

            const p = document.createElement("p");
            p.classList.add("text_glider");
            p.textContent = ["Base", "100 ossos"][index];

            imgContainer.appendChild(img);
            imgContainer.appendChild(p);
            skulSlide.appendChild(imgContainer);
        });

        skulGroup.appendChild(skulSlide);
        gliderContainer.appendChild(skulGroup);
    });

    // Inicializa o Glider após adicionar os elementos
    new Glider(gliderContainer, {
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        dots: '.dots2',
        arrows: {
            prev: '.glider-prev2',
            next: '.glider-next2'
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const legendarySkuls = [
        {
            nome: "Alrquilich",
            evolucoes: ["Archlich_Sprite.webp"]
        },
        {
            nome: "Campeão",
            evolucoes: ["Champion_Sprite.webp"]
        },
        {
            nome: "Davi Jones",
            evolucoes: ["Davy_Jones_Sprite.webp"]
        },
        {
            nome: "Jogador",
            evolucoes: ["Gambler_Sprite.webp"]
        },
        {
            nome: "Ceifador",
            evolucoes: ["Grim_Reaper_Sprite.webp"]
        },
        {
            nome: "Yaksha",
            evolucoes: ["Yaksha_Sprite.webp"]
        },
        {
            nome: "Dominador",
            evolucoes: ["Dominator_Sprite.webp"]
        },
        {
            nome: "Rei desconhecido",
            evolucoes: ["Unknown_King.webp"]
        }
    ];

    const gliderContainer = document.querySelector('.glider3');

    if(!gliderContainer) {
        console.error("Elemento .glider3 não encontrado!");
        return;
    }

    legendarySkuls.forEach((skul) => {
        const skulGroup = document.createElement("div");
        skulGroup.classList.add("skul-group");

        const skulTitle = document.createElement("h3");
        skulTitle.classList.add("skul-title");
        skulTitle.textContent = skul.nome;
        skulGroup.appendChild(skulTitle);

        const skulSlide = document.createElement("div");
        skulSlide.classList.add("skul-slide");

        skul.evolucoes.forEach((imagem, index) => {
            const imgContainer = document.createElement("div");
            imgContainer.classList.add("img-container");

            const img = document.createElement("img");
            img.src = `img/skuls/${imagem}`;
            img.alt = skul.nome;

            const p = document.createElement("p");
            p.classList.add("text_glider");
            p.textContent = ["Sem evolução"][index];

            imgContainer.appendChild(img);
            imgContainer.appendChild(p);
            skulSlide.appendChild(imgContainer);
        });

        skulGroup.appendChild(skulSlide);
        gliderContainer.appendChild(skulGroup);
    });

    // Inicializa o Glider após adicionar os elementos
    new Glider(gliderContainer, {
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        dots: '.dots3',
        arrows: {
            prev: '.glider-prev3',
            next: '.glider-next3'
        }
    });
});