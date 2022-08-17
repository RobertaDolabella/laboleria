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
-- Name: public.cakes; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."public.cakes" (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    price numeric NOT NULL,
    image character varying(255) NOT NULL,
    description text NOT NULL
);


ALTER TABLE public."public.cakes" OWNER TO postgres;

--
-- Name: public.cakes_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."public.cakes_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."public.cakes_id_seq" OWNER TO postgres;

--
-- Name: public.cakes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."public.cakes_id_seq" OWNED BY public."public.cakes".id;


--
-- Name: public.clients; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."public.clients" (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    adress character varying(200) NOT NULL,
    phone character varying(15) NOT NULL
);


ALTER TABLE public."public.clients" OWNER TO postgres;

--
-- Name: public.clients_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."public.clients_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."public.clients_id_seq" OWNER TO postgres;

--
-- Name: public.clients_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."public.clients_id_seq" OWNED BY public."public.clients".id;


--
-- Name: public.orders; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."public.orders" (
    id integer NOT NULL,
    "clientId" integer NOT NULL,
    "cakeId" integer NOT NULL,
    quantity integer NOT NULL,
    "creatAt" timestamp without time zone NOT NULL,
    "totalPrice" numeric NOT NULL
);


ALTER TABLE public."public.orders" OWNER TO postgres;

--
-- Name: public.orders_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."public.orders_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."public.orders_id_seq" OWNER TO postgres;

--
-- Name: public.orders_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."public.orders_id_seq" OWNED BY public."public.orders".id;


--
-- Name: public.cakes id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."public.cakes" ALTER COLUMN id SET DEFAULT nextval('public."public.cakes_id_seq"'::regclass);


--
-- Name: public.clients id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."public.clients" ALTER COLUMN id SET DEFAULT nextval('public."public.clients_id_seq"'::regclass);


--
-- Name: public.orders id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."public.orders" ALTER COLUMN id SET DEFAULT nextval('public."public.orders_id_seq"'::regclass);


--
-- Data for Name: public.cakes; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."public.cakes" (id, name, price, image, description) FROM stdin;
1	cheese cake	12.99	https://vejario.abril.com.br/wp-content/uploads/2016/11/6406_17-receita-torta-de-amora-com-iogurte.jpeg	uma deliciosa cheese cake com cobertura de geleia de amoras e frutas vermelhas
2	cheese cake	12.99	https://vejario.abril.com.br/wp-content/uploads/2016/11/6406_17-receita-torta-de-amora-com-iogurte.jpeg	uma deliciosa cheese cake com cobertura de geleia de amoras e frutas vermelhas
\.


--
-- Data for Name: public.clients; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."public.clients" (id, name, adress, phone) FROM stdin;
\.


--
-- Data for Name: public.orders; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."public.orders" (id, "clientId", "cakeId", quantity, "creatAt", "totalPrice") FROM stdin;
\.


--
-- Name: public.cakes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."public.cakes_id_seq"', 2, true);


--
-- Name: public.clients_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."public.clients_id_seq"', 1, false);


--
-- Name: public.orders_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."public.orders_id_seq"', 1, false);


--
-- Name: public.cakes cakes_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."public.cakes"
    ADD CONSTRAINT cakes_pk PRIMARY KEY (id);


--
-- Name: public.clients clients_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."public.clients"
    ADD CONSTRAINT clients_pk PRIMARY KEY (id);


--
-- Name: public.orders orders_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."public.orders"
    ADD CONSTRAINT orders_pk PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

