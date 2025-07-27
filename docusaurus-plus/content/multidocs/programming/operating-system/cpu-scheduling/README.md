# CPU Scheduling

[作業系統 Ch5 Process Scheduling - HackMD](https://hackmd.io/@Chang-Chia-Chi/OS-CH5)



## Borrowed-virtual-time (BVT)

[Paper](https://rcs.uwaterloo.ca/papers/bvt.pdf)

$$
A_i = A_i + \frac{t}{w_i}
$$

Extra: [cgroup 进程调度之 Borrowed-virtual-time (BVT) scheduling – remaper](http://0fd.org/2018/04/14/borrowed-virtual-time-bvt-scheduling/)



## Simple earliest deadline first (SEDF)

Three parameter: `(s, p, x)`

- `s`: execution Time

- `p`: period / deadline 

- `x`: Work conserving mode

Each job have variables: `(d, r)`

- `d`: deadline

- `r`: remaining time

In WC (Work conserving) mode, remaining time will reset to 0 when job done



## Credit Scheduler

[Credit Scheduler - Xen](https://wiki.xenproject.org/wiki/Credit_Scheduler)



