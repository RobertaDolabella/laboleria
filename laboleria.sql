--
-- PostgreSQL database dump
--

-- Dumped from database version 12.11 (Ubuntu 12.11-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.11 (Ubuntu 12.11-0ubuntu0.20.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: cakes; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.cakes (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    price numeric NOT NULL,
    image character varying(255) NOT NULL,
    description text NOT NULL
);


ALTER TABLE public.cakes OWNER TO postgres;

--
-- Name: cakes_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.cakes_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.cakes_id_seq OWNER TO postgres;

--
-- Name: cakes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.cakes_id_seq OWNED BY public.cakes.id;


--
-- Name: clients; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.clients (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    address character varying(200) NOT NULL,
    phone character varying(15) NOT NULL
);


ALTER TABLE public.clients OWNER TO postgres;

--
-- Name: clients_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.clients_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.clients_id_seq OWNER TO postgres;

--
-- Name: clients_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.clients_id_seq OWNED BY public.clients.id;


--
-- Name: orders; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.orders (
    id integer NOT NULL,
    "clientId" integer NOT NULL,
    "cakeId" integer NOT NULL,
    quantity integer NOT NULL,
    "createAt" timestamp without time zone NOT NULL,
    "totalPrice" numeric NOT NULL
);


ALTER TABLE public.orders OWNER TO postgres;

--
-- Name: orders_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.orders_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.orders_id_seq OWNER TO postgres;

--
-- Name: orders_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.orders_id_seq OWNED BY public.orders.id;


--
-- Name: cakes id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cakes ALTER COLUMN id SET DEFAULT nextval('public.cakes_id_seq'::regclass);


--
-- Name: clients id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.clients ALTER COLUMN id SET DEFAULT nextval('public.clients_id_seq'::regclass);


--
-- Name: orders id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders ALTER COLUMN id SET DEFAULT nextval('public.orders_id_seq'::regclass);


--
-- Data for Name: cakes; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.cakes (id, name, price, image, description) FROM stdin;
1	Bolo de pote	13	https://cdn.shopify.com/s/files/1/2016/0763/products/Bolo_KitKat_e08fd633-7b8f-4eda-88dd-aa4058cd7473_1200x.png?v=1563291915	Bolo de chocolate com recheio de leite ninho
2	Bolo de limao	13	https://receitinhas.com.br/wp-content/uploads/2022/03/Bolo-de-limao-de-liquidificador-1200x720.webp	Bolo de chocolate com recheio de leite ninho
3	Bolo de amora	13	https://claudia.abril.com.br/wp-content/uploads/2020/02/receita-torta-de-amora-com-iogurte.jpg	Bolo de chocolate com recheio de leite ninho
5	Bolo de banana	20	https://claudia.abril.com.br/wp-content/uploads/2020/02/receita-torta-de-amora-com-iogurte.jpg	Bolo de chocolate com recheio de leite ninho
7	Ba	20	https://claudia.abril.com.br/wp-content/uploads/2020/02/receita-torta-de-amora-com-iogurte.jpg	Bolo de chocolate com recheio de leite ninho
\.


--
-- Data for Name: clients; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.clients (id, name, address, phone) FROM stdin;
1	Fulana	Rua tal	2199999999
2	roberta	Rua jose	2199999999
3	romeu	Rua jose	2199999999
\.


--
-- Data for Name: orders; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.orders (id, "clientId", "cakeId", quantity, "createAt", "totalPrice") FROM stdin;
1	1	1	2	2022-08-19 00:00:00	26
2	2	2	2	2022-08-19 00:00:00	40
3	3	4	5	2022-08-19 00:00:00	40
4	3	4	2	2022-08-19 00:00:00	50
5	3	4	5	2022-08-19 00:00:00	40
6	3	4	5	2022-08-19 00:00:00	40
7	1	1	2	2022-08-19 00:00:00	26
8	2	1	2	2022-08-19 00:00:00	26
9	3	1	2	2022-08-19 00:00:00	26
10	4	1	2	2022-08-19 00:00:00	26
11	4	1	2	2022-08-19 00:00:00	26
12	4	1	2	2022-08-19 00:00:00	26
13	4	1	2	2022-08-19 00:00:00	26
14	3	1	2	2022-08-19 00:00:00	26
15	3	5	2	2022-08-19 00:00:00	26
16	2	2	2	2022-08-19 00:00:00	26
\.


--
-- Name: cakes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.cakes_id_seq', 7, true);


--
-- Name: clients_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.clients_id_seq', 3, true);


--
-- Name: orders_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.orders_id_seq', 16, true);


--
-- Name: cakes cakes_name_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cakes
    ADD CONSTRAINT cakes_name_key UNIQUE (name);


--
-- Name: cakes cakes_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cakes
    ADD CONSTRAINT cakes_pk PRIMARY KEY (id);


--
-- Name: clients clients_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.clients
    ADD CONSTRAINT clients_pk PRIMARY KEY (id);


--
-- Name: orders orders_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_pk PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

