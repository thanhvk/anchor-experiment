(async function() {
  const anchor = require('@project-serum/anchor');

  // Read the generated IDL.
  const idl = JSON.parse(require('fs').readFileSync('../target/idl/basic_0.json', 'utf8'));
  
  // Address of the deployed program.
  const programId = new anchor.web3.PublicKey('AQ9WMotT5VAXtpmSqSNaKsE2RdCk4m4yWgvJ7ofyBaLp');
  
  // Generate the program client from IDL.
  const program = new anchor.Program(idl, programId);
  
  // Execute the RPC.
  const signature = await program.rpc.initialize();
  console.log(signature, '================================');
})()