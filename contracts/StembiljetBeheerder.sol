contract StembiljetBeheerder {
    
    bytes32[] voteTokens;
    mapping (bytes32 => bytes32) private receipts;

    function registerVoteToken(byte32 receiptIn, byte32 voteTokenIn) {
        // TODO: verify that voteTokenIn is correct
        voteTokens.push(voteTokenIn);
        receipts[voteTokenIn] = receiptIn;
    }

    function getReceipt(byte32 voteToken) constant returns (byte32) {
        return receipts[voteToken];
    }

    function getVoteTokens() constant returns (byte32[]){
        return voteTokens;
    }
}