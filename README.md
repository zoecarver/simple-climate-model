### [Simple Climate Model](http://climate-model.surge.sh/)

This is a simple climate model I made for my climate science class. Here is what the graph looks like:

![graph](./images/graph.png)

## Usage
To run this project, download it and change directories into it. Then install the dependencies (`$ npm i`) and run it with webpack (`$ webpack`).

## Formula
The formula I am using is

![formula](./images/formula.png)

The variables I used are:
- `A = 0.3` - `A` is an arbitrary value.
  >This is a crude way of taking into account the fact that the Earth does not behave as a black body because the atmosphere has non-zero emissivity due to the presence of atmospheric greenhouse gases.

- `σ = 5.67 x 10^−8`
  > σ is known as the Stefan-Boltzmann constant, and has the value σ=5.67 x 10−8(Wm−2K −4)σ=5.67 x 10−8(Wm−2K −4);

- `S = 1370` - `S` is our solar constant and it is currently `1370`. Over a long period of time this may change, but for this model we can assume that it will stay at `1370`.

- `ε` is our input. If `ε` is `0` that is the equivalent of no greenhouse effect. In our current atmosphere we have greenhouse effect of about `0.77` which on our graph corresponds to ~15° Celsius and that is correct!

I then broke up the equation into two parts, the top and the bottom:

```
top = (1 - A) × S

bottom = (4 × σ × (1 - ε/2))
```

Finally I divided them and raised the result to `0.25`:

```
final = (top/bottom)^.25
```

When I checked this against the provided data it gave me the "correct" output so I will assume that the equation worked.

## Credit

https://www.e-education.psu.edu/meteo469/node/198
