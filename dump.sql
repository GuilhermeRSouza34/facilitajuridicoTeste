CREATE TABLE public.clients (
    id integer PRIMARY KEY,
    name character varying(100),
    email character varying(255),
    telefone character varying(100),
    coord_x integer,
    coord_y integer
);


ALTER TABLE public.clients OWNER TO postgres;


COPY public.clients (id, name, email, telefone, coord_x, coord_y) FROM stdin;
1	Maria Oliveira	maria@email.com	997942182	704580	7464639
2	Carlos Silva	carlos@email.com	997942183	700000	7500000
3	Ana Pereira	ana@email.com	997942184	720000	7450000
4	Pedro Santos	pedro@email.com	997942185	710000	7550000
5	Camila Lima	camila@email.com	997942186	705000	7505000
6	Rafael Fernandes	rafael@email.com	997942187	707000	7490000
7	Juliana Costa	juliana@email.com	997942188	710500	7475000
8	Fernando Alves	fernando@email.com	997942189	706000	7460000
9	Larissa Santos	larissa@email.com	997942190	708000	7480000
10	Roberto Oliveira	roberto@email.com	997942191	712000	7470000
\.

--
-- PostgreSQL database dump complete
--

