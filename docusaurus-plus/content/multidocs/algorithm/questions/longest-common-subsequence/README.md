# Longest Common Subsequence (LCS) 最長共同子序列

```cpp
#define _CRT_SECURE_NO_WARNINGS

#include <iostream>
#include <algorithm>
#include <string>

void LongestCommonSubsequence() {

    constexpr int size = 20;
    int dp[size + 1][size + 1]{};
    char direction[size + 1][size + 1]{};

    for (int i = 0; i <= size; i++) {
        for (int j = 0; j <= size; j++) {
            dp[i][j] = 0;
            direction[i][j] = ' ';
        }
    }

    std::string s1, s2;
    std::cin >> s1;
    std::cin >> s2;

    int s1_length = s1.size();
    int s2_length = s2.size();

    for (int row = 0; row < s1_length; row++) {
        for (int col = 0; col < s2_length; col++) {
            if (s1[row] == s2[col]) {
                dp[row + 1][col + 1] = dp[row][col] + 1;
                direction[row + 1][col + 1] = '\\';
            }
            else if(dp[row][col + 1] >= dp[row + 1][col]) {
                dp[row + 1][col + 1] = dp[row][col + 1];
                direction[row + 1][col + 1] = '^';
            }
            else {
                dp[row + 1][col + 1] = dp[row + 1][col];
                direction[row + 1][col + 1] = '<';
            }
        }
    }

    std::cout << '\n';
    for (int row = 0; row <= s1_length; row++) {
        for (int col = 0; col <= s2_length; col++) {
            std::cout << dp[row][col] << direction[row][col] << " ";
        }
        std::cout << '\n';
    }
    std::cout << '\n';

    std::cout << dp[s1_length][s2_length] << '\n';

    std::string LCS = "";
    int row = s1_length, col = s2_length;
    while (direction[row][col] != ' ') {
        switch (direction[row][col])
        {
        case '\\':
            LCS += s1[row - 1];
            row -= 1;
            col -= 1;
            break;
        case '<':
            col -= 1;
            break;
        case '^':
            row -= 1;
            break;
        }
    }

    std::cout << "LCS: " << LCS << '\n';
}
```


```cpp
ABCABCBA
CBABCABCC

0  0  0  0  0  0  0  0  0  0
0  0^ 0^ 1\ 1< 1< 1\ 1< 1< 1<
0  0^ 1\ 1^ 2\ 2< 2< 2\ 2< 2<
0  1\ 1^ 1^ 2^ 3\ 3< 3< 3\ 3\
0  1^ 1^ 2\ 2^ 3^ 4\ 4< 4< 4<
0  1^ 2\ 2^ 3\ 3^ 4^ 5\ 5< 5<
0  1\ 2^ 2^ 3^ 4\ 4^ 5^ 6\ 6\
0  1^ 2\ 2^ 3\ 4^ 4^ 5\ 6^ 6^
0  1^ 2^ 3\ 3^ 4^ 5\ 5^ 6^ 6^

6
LCS: CBACBA
```

