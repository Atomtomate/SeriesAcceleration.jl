# Series Acceleration

|     Build Status    |      Coverage      |  Documentation |      Social    |
| ------------------- |:------------------:| :-------------:| :-------------:|
| [![Build Status](https://github.com/Atomtomate/SeriesAcceleration.jl/workflows/CI/badge.svg)](https://github.com/Atomtomate/SeriesAcceleration.jl/actions) |   [![codecov](https://codecov.io/gh/Atomtomate/SeriesAcceleration.jl/branch/master/graph/badge.svg?token=msJVfWnlJI)](https://codecov.io/gh/Atomtomate/SeriesAcceleration.jl) | [![Stable](https://img.shields.io/badge/docs-stable-blue.svg)](https://atomtomate.github.io/SeriesAcceleration.jl/stable/) |[![Gitter](https://badges.gitter.im/JuliansBastelecke/SeriesAcceleration.svg)](https://gitter.im/JuliansBastelecke/SeriesAcceleration?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge) |

This package aims to provide methods to estimate the limite of infinite series from a finite
set of samples.

# Documentation

One first constructs a helper for one of the methods and then calls the sum function with
the series and this helper. Due to performance reasons, it can be advantageous to use the
sum function, expecting an array of partial sums instead.

```@repl
using SeriesAcceleration

range = 1:10              # specify the minimum number of summands before to fit
exps   = 0:4               # exponents to fit
rh = Richardson(range, exps)  # Richardson starting with 1 summands and using 5 exponents
series = 1 ./ (1:100) .^ 2
res_1 = esum(rh, series)
res_2 = esum_c(rh, cumsum(series))
```


# Status

## ToDo's

 - bunch of convenience wrapper functions (for example in-place construction of helpers).
 - Documentation structure

## Overview

Methods currently implemented are:

|       Method     |     Status      |            Algorithms          |    References   | 
| ---------------- |:---------------:|:------------------------------:|:---------------:|
|    Richardson    |   mostly done   |    Matrix Invers, Direct a_0   |   [1](#c1),[2](#c2) |
|      Shanks      |       todo      |                                |                 |
|       Levin      |       todo      |                                |                 |



# References

<a name="c1">1</a>: Bender, C. M., & Orszag, S. A. (1999). Advanced Mathematical Methods for Scientists and Engineers I. Springer New York. https://doi.org/10.1007/978-1-4757-3069-2

<a name="c2">2</a>: Rohringer, G., & Toschi, A. (2016). Impact of nonlocal correlations over different energy scales: A dynamical vertex approximation study. Physical Review B, 94(12). https://doi.org/10.1103/physrevb.94.125144 

