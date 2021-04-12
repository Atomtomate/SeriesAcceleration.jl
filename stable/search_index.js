var documenterSearchIndex = {"docs":
[{"location":"","page":"Home","title":"Home","text":"CurrentModule = SeriesAcceleration","category":"page"},{"location":"#SeriesAcceleration","page":"Home","title":"SeriesAcceleration","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"TODO: desciption here","category":"page"},{"location":"#Index","page":"Home","title":"Index","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"","category":"page"},{"location":"","page":"Home","title":"Home","text":"Modules = [SeriesAcceleration]","category":"page"},{"location":"#SeriesAcceleration.Richardson","page":"Home","title":"SeriesAcceleration.Richardson","text":"Richardson <: SumHelper\n\nDesciption\n\nRichardson method helper. This struct is initialized with a range of integers dom and a list of exponents exponents, which are used internally. More exponents can lead to better convergence at the cost of noise. There are two methods available for the fitting of internal weights: :bender, :rohringer. See C. Bender, A. Orszag 99, p. 375; G. Rohringer, A. Toschi 2016 for the derivation Due to the different fit methods, method=:bender will not use \n\nUsage\n\nArguments\n\nExamples\n\n\n\n\n\n","category":"type"},{"location":"#SeriesAcceleration.Shanks","page":"Home","title":"SeriesAcceleration.Shanks","text":"Shanks <: SumHelper\n\nDesciption\n\nShanks method helper.\n\nUsage\n\nArguments\n\nExamples\n\n\n\n\n\n","category":"type"},{"location":"#SeriesAcceleration.build_M_matrix-Tuple{AbstractVector{Int64}, AbstractVector{Int64}}","page":"Home","title":"SeriesAcceleration.build_M_matrix","text":"build_M_matrix(dom::AbstractArray{Int,1}, exponents::AbstractArray{Int,1})\n\nHelper function that build the matrix M used to fit data obtained for indices dom to a sum_nin textexponents c_ni^n tail.\n\ndom specifies the number of terms for the partial sum, that are to be fitted. exponents specifies the exponents of sum_x in textdom sum_p in textexponents 1i^p that the partial sums should be fitted to.\n\nThe coefficients c_n are obtained by solving M c = b.  b can be constructed from the data using build_weights_rohringer.\n\n\n\n\n\n","category":"method"},{"location":"#SeriesAcceleration.build_weights_bender-Tuple{AbstractVector{Int64}, AbstractVector{Int64}}","page":"Home","title":"SeriesAcceleration.build_weights_bender","text":"build_weights_bender(dom::AbstractArray{Int,1}, exponents::AbstractArray{Int,1})\n\nBuild weight matrix in closed form. See C. Bender, A. Orszag 99, p. 375.  Fit coefficients can be obtained by multiplying w with data: a_k = W_kj g_j\n\n\n\n\n\n","category":"method"},{"location":"#SeriesAcceleration.build_weights_rohringer-Tuple{AbstractVector{Int64}, AbstractVector{Int64}}","page":"Home","title":"SeriesAcceleration.build_weights_rohringer","text":"build_weights_rohringer(dom::AbstractArray{Int,1}, exponents::AbstractArray{Int,1})\n\nBuild weight matrix i.e. W = M^-1 R with M from build_M_matrix and R_kj = frac1j^k. Fit coefficients can be obtained by multiplying w with data: a_k = W_kj g_j\n\n\n\n\n\n","category":"method"},{"location":"#SeriesAcceleration.build_weights_wynn-Tuple{AbstractVector{Int64}, AbstractVector{Int64}}","page":"Home","title":"SeriesAcceleration.build_weights_wynn","text":"build_weights_wynn(arr::AbstractArray{T1,1}) where T1 <: Number\n\n\n\n\n\n","category":"method"},{"location":"#SeriesAcceleration.esum-Union{Tuple{T2}, Tuple{T1}, Tuple{AbstractVector{T1}, T2}} where {T1<:Number, T2<:SumHelper}","page":"Home","title":"SeriesAcceleration.esum","text":"esum(arr::AbstractArray{T1,1}, type::T2) where {T1 <: Number, T2 <: SumHelper}\n\nDesciption\n\nComputes improved estimated for infinite series using the summands of the series arr, as input. The method can be chosen by setting type.  In cases where the cumulative sum can not be naively computed, one can also specify a function csum_f to obtain the 1 dimensional array of partial sums.\n\nUsage\n\nesum(arr, r)\n\nArguments\n\narr    : AbstractVector of summands.\ntype   : Instance SumHelper for construction of improved estimation of the limit.\ncsum_f : Optional. Function which constructs partial sum array from arr.\n\nSee also\n\nesum_c, Richardson, Shanks.\n\nExamples\n\nusing SeriesAcceleration\n\nr = Richardson(1:5,0:3)\narr = S1_100 = 1 ./ (1:100) .^ 2\nlimit = esum(arr, r)\n\n\n\n\n\n","category":"method"},{"location":"#SeriesAcceleration.esum_c-Union{Tuple{T2}, Tuple{T1}, Tuple{AbstractVector{T1}, T2}} where {T1<:Number, T2<:SumHelper}","page":"Home","title":"SeriesAcceleration.esum_c","text":"esum_c(carr::AbstractArray{T1,1}, type::T2) where {T1 <: Number, T2 <: SumHelper}\n\nDesciption\n\nComputes improved estimated for infinite series using the cumulative sum carr as input. The method can be chosen by setting type.  See also Richardson, Shanks. For technical reasons. the algorithm uses partial sums internally. This method therefore  provides a faster and more flexible interface, than the esum method, which will  construct the partial sums itself.\n\nUsage\n\nesum_c(arr, r)\n\nArguments\n\ncarr : AbstractVector of partial sum's up to each index.\ntype : Instance SumHelper for construction of improved estimation of the limit.\n\nSee also\n\nesum, Richardson, Shanks.\n\nExamples\n\nusing SeriesAcceleration\n\nr = Richardson(1:5,0:3)\narr = cumsum(S1_100 = 1 ./ (1:100) .^ 2)\nlimit = esum_c(arr, r)\n\n\n\n\n\n","category":"method"},{"location":"#SeriesAcceleration.rateOfConv-Union{Tuple{AbstractVector{T}}, Tuple{T}} where T","page":"Home","title":"SeriesAcceleration.rateOfConv","text":"rateOfConv(arr:AbstractArray{T, 1})\n\nEstimates rate of convergence alpha_n = fraclog (x_n+1 - x_n)(x_n - x_n-1)log (x_n - x_n-1)(x_n-1-x_n-2) from array. trace can be set to true, to obtain the roc for all partial sums.\n\n\n\n\n\n","category":"method"}]
}
