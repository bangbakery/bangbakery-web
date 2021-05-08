import Head from "next/head";
import Link from "next/link";
import { Container, Heading, Flex, Button } from "@chakra-ui/react";

import Header from "../components/header";
import SummaryForm from "../components/summary-form";

export default function SummaryPage() {
  return (
    <Container p="0">
      <Head>
        <title>Order Summary - BangBakery</title>
      </Head>
      <Header />
      <SummaryForm />
    </Container>
  );
}
