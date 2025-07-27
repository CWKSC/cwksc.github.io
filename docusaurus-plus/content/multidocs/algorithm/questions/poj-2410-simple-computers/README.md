# POJ 2410 Simple Computers

http://poj.org/problem?id=2410

偷偷用 bitset 超簡單

```cpp
bitset<8> mask(0b00011111);

int main() {
    std::ios::sync_with_stdio(false);
    std::cin.tie(nullptr);
    std::cout.tie(nullptr);

    bitset<8> instruction;
    for (;;) {
        unordered_map<bitset<5>, bitset<8>> memory;
        for (int i = 0; i < 32; i++) {
            if (!(cin >> instruction)) goto leave;
            memory[i] = instruction;
        }

        bitset<5> pc;
        bitset<8> accu;

        bitset<3> type;
        bitset<5> operand;

        for (;;) {
            instruction = memory[pc];
            type = bitset<3>( (instruction >> 5).to_ulong() );
            operand = bitset<5>((instruction & mask).to_ulong());
            
            pc = pc.to_ullong() + 1;
            if (type[2]) {
                if (type[1]) {
                    if (type[0]) {
                        std::cout << accu << endl;
                        break;
                    }
                    else {
                        // JMP
                        pc = operand;
                    }
                }
                else {
                    if (type[0]) {
                        // INC
                        accu = accu.to_ullong() + 1;
                    }
                    else {
                        // DEC
                        accu = accu.to_ullong() - 1;
                    }
                }
            }
            else {
                if (type[1]) {
                    if (type[0]) {
                        // NOP
                    }
                    else {
                        // BEQ
                        if (accu == 0) {
                            pc = operand;
                        }
                    }
                }
                else {
                    if (type[0]) {
                        // LDA
                        accu = memory[operand];
                    }
                    else {
                        // STA
                        memory[operand] = accu;
                    }
                }
            }

        }

    }

    leave:

    return 0;
}
```