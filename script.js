/* Dados dos jogadores (com campo de foto adicionado) */
const players = [
  /* Goleiros */
  {
    nome: "Felipe Longo Fernandes da Silva",
    pos: "Goleiro",
    nascimento: "05/03/2005",
    idade: 20,
    contrato: "30/03/2029",
    nacionalidade: "",
    foto: "felipelongo.jpg"
  },
  {
    nome: "Hugo de Souza Nogueira",
    pos: "Goleiro",
    nascimento: "31/01/1999",
    idade: 26,
    contrato: "31/12/2029",
    nacionalidade: "",
    foto: "hugosouza.jpg"
  },
  {
    nome: "Kauê Vinicius de Souza Camargo",
    pos: "Goleiro",
    nascimento: "08/02/2004",
    idade: 21,
    contrato: "31/12/2029",
    nacionalidade: "",
    foto: "kauevinicius.jpg"
  },
  {
    nome: "Matheus Planelles Donelli",
    pos: "Goleiro",
    nascimento: "17/05/2002",
    idade: 23,
    contrato: "30/06/2028",
    nacionalidade: "",
    foto: "matheusdoneli.jpg"
  },

  /* Laterais-esquerdo */
  {
    nome: "Fabrizio Germán Angileri",
    pos: "Lateral-esquerdo",
    nascimento: "15/03/1994",
    idade: 31,
    contrato: "31/12/2025",
    nacionalidade: "Argentina",
    foto: "fabrizioangiler.jpg"
  },
  {
    nome: "Hugo Ferreira de Farias",
    pos: "Lateral-esquerdo",
    nascimento: "29/08/1997",
    idade: 28,
    contrato: "31/12/2026",
    nacionalidade: "",
    foto: "hugofarias.jpg"
  },
  {
    nome: "Matheus Lima Beltrão Oliveira",
    pos: "Lateral-esquerdo",
    nascimento: "04/05/1999",
    idade: 26,
    contrato: "31/12/2027",
    nacionalidade: "",
    foto: "matheusbidu.jpg"
  },

  /* Lateral-direito */
  {
    nome: "Matheus França da Silva",
    pos: "Lateral-direito",
    nascimento: "08/09/2000",
    idade: 25,
    contrato: "31/12/2028",
    nacionalidade: "",
    foto: "matheuzinho.jpg"
  },

  /* Zagueiros */
  {
    nome: "André Ramalho Silva",
    pos: "Zagueiro",
    nascimento: "16/02/1992",
    idade: 33,
    contrato: "31/12/2026",
    nacionalidade: "",
    foto: "andréramalho.jpg"
  },
  {
    nome: "Carlos de Menezes Júnior",
    pos: "Zagueiro",
    nascimento: "25/04/1999",
    idade: 26,
    contrato: "31/12/2028",
    nacionalidade: "",
    foto: "caca.jpg"
  },
  {
    nome: "Félix Eduardo Torres Caicedo",
    pos: "Zagueiro",
    nascimento: "11/01/1997",
    idade: 28,
    contrato: "31/12/2027",
    nacionalidade: "Equador",
    foto: "félixtorres.jpg"
  },
  {
    nome: "Gustavo Henrique Vernes",
    pos: "Zagueiro",
    nascimento: "24/03/1993",
    idade: 32,
    contrato: "31/12/2027",
    nacionalidade: "",
    foto: "gustavohenrique.jpg"
  },
  {
    nome: "João Pedro de Sousa Rodrigues",
    pos: "Zagueiro",
    nascimento: "31/12/2003",
    idade: 21,
    contrato: "31/12/2026",
    nacionalidade: "",
    foto: "joãopedro.jpg"
  },

  /* Atacantes */
  {
    nome: "Guilherme William Silva Inácio",
    pos: "Atacante",
    nascimento: "06/02/2007",
    idade: 18,
    contrato: "30/06/2030",
    nacionalidade: "",
    foto: "guinegão.jpg"
  },
  {
    nome: "Héctor José Hernández Marrero",
    pos: "Atacante",
    nascimento: "14/09/1995",
    idade: 30,
    contrato: "31/12/2026",
    nacionalidade: "Espanha",
    foto: "HéctorHernandez.jpg"
  },
  {
    nome: "Kayke Ferrari Guimarães",
    pos: "Atacante",
    nascimento: "28/04/2004",
    idade: 21,
    contrato: "30/06/2027",
    nacionalidade: "",
    foto: "kayke.jpg"
  },
  {
    nome: "Memphis Depay",
    pos: "Atacante",
    nascimento: "13/02/1994",
    idade: 31,
    contrato: "31/07/2026",
    nacionalidade: "Holanda",
    foto: "menphis.jpg"
  },
  {
    nome: "Ángel Rodrigo Romero Villamayor",
    pos: "Atacante",
    nascimento: "04/07/1992",
    idade: 33,
    contrato: "31/12/2025",
    nacionalidade: "Paraguai",
    foto: "ángelromero.jpg"
  },
  {
    nome: "Talles Magno Bacelar Martins",
    pos: "Atacante",
    nascimento: "26/06/2002",
    idade: 23,
    contrato: "31/12/2025",
    nacionalidade: "",
    foto: "talesmagno.jpg"
  },
  {
    nome: "Victor Vinícius Coelho dos Santos",
    pos: "Atacante",
    nascimento: "09/10/1993",
    idade: 32,
    contrato: "31/12/2026",
    nacionalidade: "",
    foto: "vitinho.jpg"
  },
  {
    nome: "Yuri Alberto Monteiro da Silva",
    pos: "Atacante",
    nascimento: "18/03/2001",
    idade: 24,
    contrato: "22/07/2030",
    nacionalidade: "",
    foto: "yuri.jpg"
  },

  /* Meias */
  {
    nome: "André Martin Carrillo Diaz",
    pos: "Meia",
    nascimento: "14/06/1991",
    idade: 34,
    contrato: "31/12/2026",
    nacionalidade: "Peru",
    foto: "andrécarrillo.jpg"
  },
  {
    nome: "Diego da Cruz Lopes",
    pos: "Meia",
    nascimento: "16/09/2007",
    idade: 18,
    contrato: "31/12/2029",
    nacionalidade: "",
    foto: "dieguinho.jpg"
  },
  {
    nome: "Rodrigo Garro",
    pos: "Meia",
    nascimento: "04/01/1998",
    idade: 27,
    contrato: "31/12/2028",
    nacionalidade: "Argentina",
    foto: "garro.jpg"
  },

  /* Volantes */
  {
    nome: "André Luiz Santos Dias",
    pos: "Volante",
    nascimento: "20/06/2006",
    idade: 19,
    contrato: "31/12/2029",
    nacionalidade: "",
    foto: "andréluiz.jpg"
  },
  {
    nome: "Luiz Gustavo Lemos Carvalho",
    pos: "Volante",
    nascimento: "02/01/2006",
    idade: 19,
    contrato: "30/09/2027",
    nacionalidade: "",
    foto: "luizgustavo.jpg"
  },
  {
    nome: "Breno de Souza Bidon",
    pos: "Volante",
    nascimento: "20/02/2005",
    idade: 20,
    contrato: "31/12/2029",
    nacionalidade: "",
    foto: "bidon.jpg"
  },
  {
    nome: "Charles Rigon Matos",
    pos: "Volante",
    nascimento: "19/06/1996",
    idade: 29,
    contrato: "31/12/2028",
    nacionalidade: "",
    foto: "charles.jpg"
  },
  {
    nome: "José Andrés Martínez Torres",
    pos: "Volante",
    nascimento: "07/08/1994",
    idade: 31,
    contrato: "31/12/2027",
    nacionalidade: "Venezuela",
    foto: "martinez.jpg"
  },
  {
    nome: "Maycon de Andrade Barberan",
    pos: "Volante",
    nascimento: "15/07/1997",
    idade: 28,
    contrato: "31/12/2025",
    nacionalidade: "",
    foto: "maycon.jpg"
  },
  {
    nome: "Raniele Almeida Melo",
    pos: "Volante",
    nascimento: "31/12/1996",
    idade: 28,
    contrato: "31/12/2028",
    nacionalidade: "",
    foto: "raniele.jpg"
  },
  {
    nome: "Ryan Gustavo de Lima",
    pos: "Volante",
    nascimento: "15/07/2003",
    idade: 22,
    contrato: "31/12/2028",
    nacionalidade: "",
    foto: "ryan.jpg"
  }
];

/* --- DOM references --- */
const grid = document.getElementById('players-grid');
const searchInput = document.getElementById('search');
const filterSelect = document.getElementById('filter');

/* Utility: create initials for fallback */
function initials(name) {
  return name.split(' ').map(s => s[0]).slice(0, 2).join('').toUpperCase();
}

/* Render cards */
function render(list) {
  grid.innerHTML = '';

  if (!list.length) {
    grid.innerHTML = '<p style="grid-column:1/-1;color:#666;padding:1rem">Nenhum jogador encontrado.</p>';
    return;
  }

  list.forEach(p => {
    const card = document.createElement('article');
    card.className = 'card';

    card.innerHTML = `
      <div class="avatar">
        <img src="${p.foto}" alt="${p.nome}" onerror="this.style.display='none'; this.parentElement.innerHTML='${initials(p.nome)}';">
      </div>

      <div class="info">
        <h3>${p.nome}</h3>
        <div class="meta"><span class="pos">${p.pos}</span> ${p.nacionalidade ? ' • ' + p.nacionalidade : ''}</div>
        <p>Nascimento: ${p.nascimento}</p>
        <p>Idade: ${p.idade} anos</p>
        <p>Contrato até: ${p.contrato}</p>
      </div>
    `;

    grid.appendChild(card);
  });
}

/* Filters */
function applyFilters() {
  const term = searchInput.value.trim().toLowerCase();
  const pos = filterSelect.value;

  let result = players.slice();

  if (pos !== 'tudo') {
    result = result.filter(p => p.pos === pos);
  }
  if (term) {
    result = result.filter(p => p.nome.toLowerCase().includes(term));
  }

  render(result);
}

searchInput.addEventListener('input', applyFilters);
filterSelect.addEventListener('change', applyFilters);

/* Initial render (ordenado alfabeticamente) */
players.sort((a, b) => a.nome.localeCompare(b.nome, 'pt-BR', { sensitivity: 'base' }));
render(players);
