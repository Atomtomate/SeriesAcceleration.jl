abstract type SumHelper end

struct DirectSum <: SumHelper end

#TODO: make thise somewhat stable and fast
esum_c(carr::AbstractArray{T1,1}, type::DirectSum) where {T1 <: Number} = carr[end] 
esum(arr::AbstractArray{T1,1}, type::DirectSum) where {T1 <: Number} = sum(arr)
npartial_sums(type::DirectSum) = 1
