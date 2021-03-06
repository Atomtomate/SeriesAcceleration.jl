M1 = SeriesAcceleration.build_M_matrix(1:2, [0,1])
M2 = SeriesAcceleration.build_M_matrix(1:30, [0,1,2,3,4])

@testset "build M matrix" begin
    @test all(M1 .≈ [2.0 1.5; 1.5 1.25])
    @test all(inv(inv(M2)) .≈ M2)
end


@testset "build weights" begin
    @test all(SeriesAcceleration.build_weights_rohringer(1:2, 0:1) .≈ [-1 2; 2 -2]) 
    @test all(SeriesAcceleration.build_weights_bender(1:2, 0:1) .≈ [-1 -1; 2 2]) 
end

@testset "constructor" begin
    @test_throws DomainError Richardson(0:2, [0,1],method=:bender)     # starting cum. sum. at 0
    @test_throws DomainError Richardson(1:3, 1:2,method=:bender) # 0 exponent missing
    @test_throws DomainError Richardson(1:3, [0,2],method=:bender) # 1 exponent missing
    @test_throws OverflowError Richardson(1000:1100,0:6, method=:bender)

    @test_throws DomainError Richardson([1,2,3], [0,1,2,3],method=:rohringer) # not enough exponents
    @test_throws DomainError Richardson(0:2, [0,1],method=:rohringer)     # starting cum. sum. at 0
    @test_throws DomainError Richardson(1:3, 1:2,method=:rohringer) # 0 exponent missing
    @test_throws OverflowError Richardson(1000:1100,0:6, method=:rohringer)

    @test Richardson(1:2, [0,1],method=:bender).indices == 1:2
    @test all(Richardson(1:2, [0,1],method=:bender).weights .≈ [-1, 2])
    @test all(Richardson(100:102, [0,1],method=:bender).indices == [101,102])
end

@testset "sum" begin
    r = Richardson(1:1, 0:0)
    @test esum([1], r) == 1.0
    @test esum_c([1], r) == 1.0
end

@testset "auxilliary functions" begin
    r1 = Richardson(1:1, 0:0)
    r2 = Richardson(1:2, 0:1)
    @test npartial_sums(r1) == 1
    @test npartial_sums(r2) == 2
end

@testset "functional tests" begin
    # table from Bender, Orszag 99, p 377
    bender_N = [0,1,2,3,4]
    bender_sn = [1,5,10,15]
    bender_weights_res = [1.0 1.5 1.625 1.6435185185 1.6449652778;
                          1.464 1.63028 1.64416667 1.6449225246 1.6449358111;
                          1.550 1.64068 1.64480905 1.6449334030 1.6449341954;
                          1.580 1.64294 1.64489341 1.6449339578 1.6449340899]
    results_bender = Array{Float64,2}(undef, size(bender_weights_res)...)
    results_rohringer = Array{Float64,2}(undef, size(bender_weights_res)...)
    results_esum = Array{Float64,2}(undef, size(bender_weights_res)...)
    for (i,i_sn) in enumerate(bender_sn), (j,j_N) in enumerate(bender_N)
        slice = i_sn:(i_sn+j_N)
        r_b = Richardson(slice, 0:j_N, method=:bender)
        r_r = Richardson(slice, 0:j_N, method=:rohringer)
        results_bender[i,j] = esum_c(cS1_100[slice], r_b)
        results_rohringer[i,j] = esum_c(cS1_100[slice], r_r)
        results_esum[i,j] = esum(S1_100, r_r)

    end
    @test all(abs.(results_bender .- bender_weights_res) .< 1.0e-3)
    @test all(abs.(results_rohringer .- bender_weights_res) .< 1.0e-3)
    @test all(abs.(results_esum .- results_rohringer) .< 1.0e-8)
end
