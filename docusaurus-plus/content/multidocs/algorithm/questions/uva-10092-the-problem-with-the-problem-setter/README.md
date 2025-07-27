# UVa 10092 The Problem with the Problem Setter

https://onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&category=38&page=show_problem&problem=1033

This one is Bipartite Matching

```cpp
int main() {
    std::ios::sync_with_stdio(false);
    std::cin.tie(nullptr);
    std::cout.tie(nullptr);

    int nk, np;
    while(std::cin >> nk >> np) {
        if(nk == 0 && np == 0) break;
        
        std::unordered_map<int, std::unordered_map<int, int>> graph;
        std::vector<int> questionNumber(nk);
        int startNode = nk + np;
        int endNode = 0;
        
        int sumQuestion = 0;
        for(int i = 0; i < nk; i++) {
            std::cin >> questionNumber[i];
            graph[1 + i][endNode] = questionNumber[i];
            sumQuestion += questionNumber[i];
        }

        int numberOfCategory;
        int category;
        for(int i = 0; i < np; i++) {
            std::cin >> numberOfCategory;
            for(int j = 0; j < numberOfCategory; j++) {
                std::cin >> category;
                graph[nk + i][category] = 1;
            }
            graph[startNode][nk + i] = 1;
        }
        
        int maxFlow = maxFlowNetwork(graph, startNode, endNode);
        std::cout << (maxFlow == sumQuestion) << std::endl;
    }

    return 0;
}
```
