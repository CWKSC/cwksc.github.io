# Making Okonomiyaki (use BFS)

有四個杯，各自有不同的容量

有無限的麵粉

每一回合的步驟可以作以下操作

1. 填滿

2. 倒掉

3. 倒到另一個杯子中，直至接受者滿或輸出者為空

問達到目標數目的最少步驟

---

E.g.

容量為 1 2 3 5 

目標是 4

最少步驟為 2

填滿第四個杯子(5) -> 倒 1 到第一個杯子中

第四個杯子現在剩餘 4 ，達到目標

---

用 BFS 的概念，記憶化搜索

搜索可行操作的結果

```cpp
#include <iostream>
#include <queue>

#define arr4d [26][26][26][26]

std::queue<int> queue;
bool visited arr4d;

// c = current
// p = prev
void solve(int ca, int cb, int cc, int cd, int step, int pa, int pb, int pc, int pd) {
    if(!visited[ca][cb][cc][cd]) {
        visited[ca][cb][cc][cd] = true;
        queue.push(ca);
        queue.push(cb);
        queue.push(cc);
        queue.push(cd);
        queue.push(step);
    }
}

int main() {
    std::ios::sync_with_stdio(false);
    std::cin.tie(nullptr);
    std::cout.tie(nullptr);

    int maxA, maxB, maxC, maxD, T;
    int ca, cb, cc, cd, step; // c = current
    int na, nb, nc, nd; // n = new
    while(std::cin >> maxA >> maxB >> maxC >> maxD >> T) {
        for(int i = 0; i < 25; i++) {
            for(int j = 0; j < 25; j++) {
                for(int k = 0; k < 25; k++) {
                    for(int l = 0; l < 25; l++) {
                        visited[i][j][k][l] = false;
                    }
                }
            }
        }
        std::queue<int> empty;
        std::swap(queue, empty);

        bool noFound = true;
        solve(0, 0, 0, 0, 0, 0, 0, 0, 0);
        while(!queue.empty()) {
            ca   = queue.front(); queue.pop();
            cb   = queue.front(); queue.pop();
            cc   = queue.front(); queue.pop();
            cd   = queue.front(); queue.pop();
            step = queue.front(); queue.pop();

            if(ca == T || cb == T || cc == T || cd == T) {
                std::cout << step << '\n';
                noFound = false;
                break;
            }

            step++;
            solve(0, cb, cc, cd, step, ca, cb, cc, cd);
            solve(ca, 0, cc, cd, step, ca, cb, cc, cd);
            solve(ca, cb, 0, cd, step, ca, cb, cc, cd);
            solve(ca, cb, cc, 0, step, ca, cb, cc, cd);

            solve(maxA, cb, cc, cd, step, ca, cb, cc, cd);
            solve(ca, maxB, cc, cd, step, ca, cb, cc, cd);
            solve(ca, cb, maxC, cd, step, ca, cb, cc, cd);
            solve(ca, cb, cc, maxD, step, ca, cb, cc, cd);

            int cabcd[4] = { ca, cb, cc, cd };
            int maxbcd[4] = { maxA, maxB, maxC, maxD };
            for(int i = 0; i < 4; i++) {
                for(int j = 0; j < 4; j++) {
                    if(i == j) continue;
                    int nabcd[4] = { ca, cb, cc, cd };
                    nabcd[i] = cabcd[i] + cabcd[j];
                    if(nabcd[i] > maxbcd[i]) nabcd[i] = maxbcd[i];
                    nabcd[j] = cabcd[j] + cabcd[i] - nabcd[i];
                    solve(nabcd[0], nabcd[1], nabcd[2], nabcd[3], step, ca, cb, cc, cd);
                }
            }

        }
        if(noFound) {
            std::cout << "-1\n";
        }
    }
    return 0;
}
```