contract MarrocoinICO {

    // Variables

    address public owner;
    uint256 public totalETHRaised;
    uint256 public totalTokensIssued;
    uint256 public tokensPerETH;
    uint256 public startTime;
    uint256 public endTime;

    // Events

    event ETHReceived(address indexed sender, uint256 amount);
    event TokenIssued(address indexed to, uint256 amount);

    // Constructor

    constructor(
        uint256 _tokensPerETH,
        uint256 _startTime,
        uint256 _endTime
    ) {
        owner = msg.sender;
        tokensPerETH = _tokensPerETH;
        startTime = _startTime;
        endTime = _endTime;
    }

    // Modifier

    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }

    // Functions

    function participate() public payable {
        require(block.timestamp >= startTime);
        require(block.timestamp <= endTime);

        // Calculate the number of tokens to issue
        uint256 amount = msg.value / tokensPerETH;

        // Issue the tokens
        totalTokensIssued += amount;
        totalETHRaised += msg.value;

        // Emit an event
        emit TokenIssued(msg.sender, amount);
    }

    function claimTokens() public {
        require(block.timestamp > endTime);

        // Calculate the number of tokens to claim
        uint256 amount = balanceOf(msg.sender);

        // Transfer the tokens to the user
        transfer(msg.sender, amount);
    }

    // Getters

    function balanceOf(address account) public view returns (uint256) {
        return tokens[account];
    }

    // Owner functions

    function setTokensPerETH(uint256 _tokensPerETH) public onlyOwner {
        tokensPerETH = _tokensPerETH;
    }

    function setStartTime(uint256 _startTime) public onlyOwner {
        startTime = _startTime;
    }

    function setEndTime(uint256 _endTime) public onlyOwner {
        endTime = _endTime;
    }

}
