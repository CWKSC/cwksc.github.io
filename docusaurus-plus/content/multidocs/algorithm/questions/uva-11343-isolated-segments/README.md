# UVa 11343 Isolated Segments

https://onlinejudge.org/index.php?option=onlinejudge&Itemid=8&page=show_problem&problem=2318

給出一堆線的頭尾 x y 座標

求沒有與其他線段相交的線的數目

用 cross product 去找出點在線的左邊還是右邊

然後檢查 點 剛好在線上面的情況

發現碰撞後用 disjointset union，答案等於總數減去 union 過的數目 + 1

```cpp
#include <iostream>
#include <algorithm>
#include <cmath>

constexpr int maxSize_DistjointSet = 101;

int count = 0;
struct DistjointSet {
    int disjointSet[maxSize_DistjointSet]{};
    DistjointSet() {
        for (int i = 0; i < maxSize_DistjointSet; i++) {
            disjointSet[i] = -1;
        }
    }
    int findParent(int id) {
        if (disjointSet[id] == -1) return id;
        int parent = findParent(disjointSet[id]);
        disjointSet[id] = parent;
        return parent;
    }
    void unionSet(int a, int b) {
        int aParent = findParent(a);
        int bParent = findParent(b);
        if (aParent == bParent) return;
        disjointSet[bParent] = aParent;
        count++;
    }
};

struct Point {
    int x, y;
    Point() {}
    Point(int x, int y) {
        this->x = x;
        this->y = y;
    }
};

struct Vector {
    int x, y;
    Vector(Point a, Point b) {
        x = b.x - a.x;
        y = b.y - a.y;
    }
};

// Dot Product //
// a . b = |a| |b| cos x
// a . b = a b^T = a.x * b.x + a.y * b.y
// 
// cos 90 = 0, so dot product will be zero
// if angle < 90, dot product > 0
// if angle = 90, dot product = 0
// if angle > 90, dot product < 0
int dotProduct(Vector a, Vector b) {
    return a.x * b.x + a.y * b.y;
}

// Cross product //
// a x b = |a| |b| sin x 
//         | a.x a.y | 
// a x b = | b.x b.y | = a.x * b.y - a.y * b.x
//
// sin 0 / 180 = 0, so cross product will be zero
// if cross product > 0, a to b is anticlockwise 
// if cross product = 0, a to b is parallel 
// if cross product < 0, a to b is counterclockwise
int crossProduct(Vector a, Vector b) {
    return a.x * b.y - a.y * b.x;
}
int crossProduct(Point a, Point b, Point c) {
    return crossProduct(Vector(a, b), Vector(b, c));
}

// a^2 + b^2 = c^2
double length(Vector v) {
    return sqrt(v.x * v.x + v.y * v.y);
}
int lengthPower2(Vector v) {
    return v.x * v.x + v.y * v.y;
}

// a . b = |a| |b| cos x
// cos x = (a . b) / (|a| |b|)
// x = cos-1 ( (a . b) / (|a| |b|) )
double getAngleByDotProduct(Vector v1, Vector v2 ) {
    return acos( dotProduct(v1, v2) / (length(v1) * length(v2)) );
}

// a x b = |a| |b| sin x 
// sin x = (a x b) / (|a| |b|)
// x = sin-1 ( (a x b) / (|a| |b|) )
double getAngleByCrossProduct(Vector v1, Vector v2) {
    return asin( crossProduct(v1, v2) / (length(v1) * length(v2)) );
}

bool isAnticlockwise_a_b_c(Point a, Point b, Point c) {
    return crossProduct(Vector(a, b), Vector(b, c)) > 0;
}

double distance(Point a, Point b) {
    return std::sqrt((b.x - a.x) * (b.x - a.x) + (b.y - a.y) * (b.y - a.y));
}
double distancePower2(Point a, Point b) {
    return (b.x - a.x) * (b.x - a.x) + (b.y - a.y) * (b.y - a.y);
}

struct Segment {
    Point start;
    Point end;
    Segment(Point start, Point end) {
        this->start = start;
        this->end = end;
    }
    bool pointInsideXRange(Point p) {
        return 
            p.x >= std::min(start.x, end.x) &&
            p.x <= std::max(start.x, end.x);
    }
    bool pointInsideYRange(Point p) {
        return 
            p.y >= std::min(start.y, end.y) &&
            p.y <= std::max(start.y, end.y);
    }
};

bool isCollideWhenParallel(Segment s, Point p) {
    return s.pointInsideXRange(p) && s.pointInsideYRange(p);
}

bool intersect(Segment s1, Segment s2) {
    float c1 = crossProduct(s1.start, s1.end, s2.start);
    float c2 = crossProduct(s1.start, s1.end, s2.end);
    float c3 = crossProduct(s2.start, s2.end, s1.start);
    float c4 = crossProduct(s2.start, s2.end, s1.end);
    bool isAnticlockwise_s1_s2start = c1 > 0;
    bool isAnticlockwise_s1_s2end   = c2 > 0;
    bool isAnticlockwise_s2_s1start = c3 > 0;
    bool isAnticlockwise_s2_s1end   = c4 > 0;
    if( (isAnticlockwise_s1_s2start != isAnticlockwise_s1_s2end) &&
        (isAnticlockwise_s2_s1start != isAnticlockwise_s2_s1end) ) {
        return true;
    }
    if(c1 == 0 && isCollideWhenParallel(s1, s2.start)) return true;
    if(c2 == 0 && isCollideWhenParallel(s1, s2.end))   return true;
    if(c3 == 0 && isCollideWhenParallel(s2, s1.start)) return true;
    if(c4 == 0 && isCollideWhenParallel(s2, s1.end))   return true;
    return false;
}
```

