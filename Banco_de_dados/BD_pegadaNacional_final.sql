create database pegadaNacional;

use pegadaNacional;

CREATE TABLE usuarios (
    id_usuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL,
    senha VARCHAR(255) NOT NULL,
    ConfirmarSenha VARCHAR(255) NOT NULL,
    data_cadastro DATETIME DEFAULT CURRENT_TIMESTAMP
);

insert into usuarios values 
(default, 'Leticia', 'leticia@gmail.com', 'teste123', 'teste123', default);

CREATE TABLE artistas (
    id_artista INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(120) NOT NULL,
    descricao TEXT
);

insert into artistas values
(default, 'Charlie Brown Jr.', 'Banda de rock alternativo'),
(default, 'Rita Lee.', 'Cantora, compositora e instrumentista brasileira, aclamada como a "rainha do rock brasileiro"'),
(default, 'Legião Urbana.', 'Banda conhecida por suas letras poéticas e críticas que ressoavam com a juventude da época'),
(default, 'Capital Inicial.', ' Com mais de 40 anos de carreira, a banda é conhecida por sua energia no palco e por sucessos'),
(default, 'Skank.', 'A banda é conhecida por sua sonoridade única, que mescla inicialmente o reggae, o ska e o dancehall com o rock e a MPB, tornando-se um dos maiores nomes do pop rock nacional. '),
(default, 'Pitty.', 'cantora, compositora e musicista brasileira de rock'),
(default, 'Engenheiros do Hawaii.', 'Banda conhecida por suas letras irônicas, críticas e poéticas');

CREATE TABLE musicas (
    id_musica INT PRIMARY KEY AUTO_INCREMENT,
    id_artista INT,
    titulo VARCHAR(200) NOT NULL,
    trecho_lacunas TEXT,
    trecho_completo TEXT,
    dificuldade VARCHAR(20),
    CONSTRAINT fk_musicas_artistas 
        FOREIGN KEY (id_artista) 
			REFERENCES artistas(id_artista)
);

insert into musicas (id_musica, id_artista, titulo, trecho_lacunas) values 
(default, 1, 'Tamo Ai na Atividade', 'Eu nasci ____ , mas não nasci otário  Eu é que não caio no conto do ____ Eu tenho fé em Deus pra ____ qualquer parada Chega com ____ na minha quebrada Eu não vim pra me ____ Eu vim pra ____'),
(default, 4, 'Todas as Noites', 'Hoje à noite tudo pode ____ Quem olhar nos olhos ____ bares e sedução Num canto ____ Pequenos goles de ____ A noite esclarece o que o dia ____'),
(default, 1, 'Dias de luta, Dias de glória', 'Na minha vida nem tudo ____ Mas quanto mais a gente ____ mais a gente ____ Hoje estou ____ porque eu sonhei com você E amanhã posso chorar por não poder te ver mais O seu sorriso vale mais que um ____'),
(default, 1, 'Vicios e Virtudes', 'Eu nunca tive muito a ver com ____ O livro que ela ____ eu não li Eu nunca tive muito a ver com ela O filme que ela ____ eu não vi Como chegar nela eu nem sei  Ela é tão ____ e eu aqui pichando muro Como ____ nela eu nem sei Ela é tão diferente e eu igual a todo ____'),
(default,3, 'Tempo Perdido', 'Todos os dias antes de ____ Lembro e esqueço como foi o ____ Sempre em ____ Não temos tempo a perder Nosso suor ____ É bem mais belo que esse sangue ____'),
(default, 3, 'Pais e Filhos', 'Quero ____ Vou ____ de casa Posso dormir aqui com ____ ? Estou com medo Tive um ____ Só vou voltar depois das ____ Meu filho vai ter nome de ____ Quero o ____ mais bonito'),
(default, 3, 'Geração Coca-Cola', 'Comercial e industrial Mas agora ____ nossa vez Vamos cuspir de volta o lixo em ____ de vocês Somos ____ filhos da revolução Somos ____ sem religião Somos o ____ da nação Geração Coca-Cola'),
(default, 7, 'Era um garoto e como eu...', 'Era um garoto que como eu ____ os Beatles e os Rolling Stones Girava o mundo sempre a ____ As coisas lindas da ____ Não era belo, mas mesmo ____ Havia mil garotas a ____'),
(default, 7, 'Somos Quem Podemos Ser', 'Um dia me ____ Que as nuvens não eram de ____ Um ____ me disseram Que os ventos às vezes erram a direção E tudo ficou tão ____ Um intervalo na ____ Uma estrela de brilho raro Um disparo para um ____'),
(default, 6, 'Equalize', 'Às vezes, se eu me ____ Se eu não me vigio um ____ Me transporto pra perto de ____ Já vi que não posso ficar tão ____ Me vem logo aquele ____'),
(default, 2, 'Lança Perfume', 'Lança, menina, lança todo esse ____ Desbaratina, não dá pra ficar ____ Ao teu amor que tem cheiro de coisa ____ Vem cá, meu bem, me descola um ____ Eu sou neném, só sossego com ____');


CREATE TABLE respostas (
    id_resposta INT PRIMARY KEY AUTO_INCREMENT,
    id_usuario INT NOT NULL,
    id_musica INT NOT NULL,
    acertos INT NOT NULL, 
    porcentagem INT NOT NULL,
    data_resposta DATETIME DEFAULT CURRENT_TIMESTAMP,
		FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario),
		FOREIGN KEY (id_musica) REFERENCES musicas(id_musica)
);


select * from usuarios;
select * from artistas;
select * from musicas;
select * from respostas;

truncate table respostas; 

-- acertos por artista
SELECT a.nome AS artista,
       SUM(r.acertos) AS total_acertos
FROM respostas r
JOIN musicas m ON r.id_musica = m.id_musica
JOIN artistas a ON m.id_artista = a.id_artista
GROUP BY artista;

-- acertos por musica
SELECT m.titulo,
u.id_usuario,
	AVG(r.acertos) AS media_acertos
FROM respostas r
JOIN musicas m ON r.id_musica = m.id_musica
join usuarios u on r.id_usuario = u.id_usuario
where u.id_usuario = 1
GROUP BY m.id_musica;

-- taxa de acertos
SELECT round(AVG(porcentagem) , 2) AS taxa_acertos, u.nome
FROM respostas r
JOIN musicas m ON r.id_musica = m.id_musica 
JOIN usuarios u ON r.id_usuario = u.id_usuario
where r.id_usuario = u.id_usuario
GROUP BY u.id_usuario;


-- qualr artista acerta mais
SELECT 
    u.id_usuario,
    a.id_artista,
    a.nome AS artista,
    AVG(r.acertos) AS media_acertos
FROM respostas r
JOIN musicas m ON r.id_musica = m.id_musica
JOIN artistas a ON m.id_artista = a.id_artista
JOIN usuarios u ON r.id_usuario = u.id_usuario
WHERE u.id_usuario = 1 
GROUP BY a.id_artista, u.id_usuario
ORDER BY media_acertos DESC;

-- qtas ja jogou (nao conta musicas iguais)
SELECT 
    COUNT(DISTINCT id_musica) AS musicas_diferentes
FROM respostas
WHERE id_usuario = 1


