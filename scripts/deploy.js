async function main() {
    const Election = await ethers.getContractFactory("Election");
    const election = await Election.deploy("Sample Election");
  
    console.log("Election deployed to:", election.address);
  }
  
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
  