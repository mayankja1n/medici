import React from "react";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import { useContract, useContractRead } from "@thirdweb-dev/react";
import { Container, Spinner, Text } from "@chakra-ui/react";
import UpdateRecordForm from "../components/UpdateRecordForm";
import Toolbar from "../components/Toolbar";
import { useRouter } from "next/router";

const Update: NextPage = () => {
	const router = useRouter();

	const NoRecordHeading = () => (
		<Text fontSize="4xl" fontWeight="bold" textAlign="center" color="white">
			Update Patient Record
		</Text>
	);

	useEffect(() => {
		console.log(router.query["userId"]);
	}, []);

	return (
		<>
			<Toolbar />
			<br />
			<Container>
				<NoRecordHeading />
				<UpdateRecordForm userId={router.query["userId"] as string} />
			</Container>
		</>
	);
};

export default Update;
