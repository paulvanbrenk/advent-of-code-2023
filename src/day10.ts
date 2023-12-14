const test_input =
    `..F7.
.FJ|.
SJ.L7
|F--J
LJ...`.split('\n');

const test_input2 = `FF7FSF7F7F7F7F7F---7
L|LJ||||||||||||F--J
FL-7LJLJ||||||LJL-77
F--JF--7||LJLJ7F7FJ-
L---JF-JLJ.||-FJLJJ7
|F|F-JF---7F7-L7L|7|
|FFJF7L7F-JF7|JL---7
7-L-JL7||F7|L7F-7F7|
L.L7LFJ|||||FJL7||LJ
L7JLJL-JLJLJL--JLJ.L`.split('\n');

const puzzle_input = `FFFJJ--JF|JF7-7FJ7FFJ-F--J7F-77.-7-7L|.F.|7F7FLJ-7-|-FFJ-FL7-7FF|-|-7FF7777L-L-7J----JF7.F.F--777FF|77F7|F|777F7LF-J7..-7.777F.F.-.FF.7FF7-7
-|.||77F-.LJJ7L-J-7JFFL7FFJL--77J|L7-LFJF7|L|7J|.|L7F--7FJ.--F-7-7LL|-FJ|LL.LLJ..L|.|.---LLF7..F77|J|FJ-JF|L7-L7|L|.7FFJF.F|-F7|7JFF|-FFFJ.L
L-J-7J7LJ--JJ|FJ--|-77JLJJJ|||F----77FJ-.LF.LF.L77-J-7LL|.FL..|.||7.L-JLJFJ7J.FL.|L7L7FJ-||JF7F|.FF7FJJL7-LF|7JJL.LF.LJF7--J7F.|J.LF7F-7L.J|
FLJ7LL77FJ.|.|--FJ|-||7.LFLFF-L--77LFL-FJFJ.LL7JFJF7-LJJF7L|-7L-JJFFF|F77L7J.7J|FL-7J.|F7J|7JF-77J|F77.LF7|LJJ77L|J|.L|L.J.L|L7L77.JLJL-JFLL
L.F|LL-J7|.FLL7.L-|7|JJF-L-|-7F-7FFF-|-FF-J.FLJ.L7L-7F7-|7.7|LLJF---FJFJF.77.L-77JF|-LJ-|7.FFL7|7|F||77.||F7JL-F7J||L-JJ7..|JFJ7.|-LJ.F--LJ|
.L|J.F|-F---7LF-LFJ-|J7.FL7FJ|FF|FL|LJ|LLJ7L|.F..J--LL77LJ7||JL-7LJJ||L.7.J-FJ.|.|..||LLL-FF|L||7F-J|LF7|LJ|--7LJ.|77.LL7F|--FJL7-FJJ.FLJFJ7
JJ|-F.|L7LFLJFL-.7FF7-LJ7|-LF|7FJ7.|FJJ7L.FJL7JFF||.L7LJ7J7FF7FJJJ.FF|J7L|7LL.FF--F--JFL|7F7F7|L7L-7L7||L7FJ.L-.|.L|-F-FFJL|7LJ.L7|L7-L.-J7|
|F7|.F7-|77F|FJ.|LL-L7|JL77F7.FLLJ7--7LJ-FF77.-|FF77.L77|.FFFJJJ7FF-LF7--L77||J|7J.LLL|.F-J|||L7|F7L7LJL-J|J7FJ-L-L7J|.FFJ7JL|J.LFJF-J|-J.FJ
FL7F7-|J|--J7F-FJJL-L-J|.LL|J|||LLJ|L7.|FFLLJ7.FJLFF--7-FJ7|L77.F||.JJ||.LF-7J-77.F--7JFL-7LJL7||||FJF7F7FJ.FFJF7..L-7.F|.7-.-.FJL--|---J.F.
77|J.---JJ7||.L|J-F-.|L|.|F-7|F-7FF-.LF--J|LFLF|J.F7.L||LL|-JLJFFF7-J||-7-L7J.F7JFL-7L--7JL--7||||||FJLJLJ-F7|FJ|.|LF77JLJJ77--.-F-FJLJFF-|J
L--J.|7J|FJ-|F--J7J-F-F|7.F7.F.LJ7LJ--JF--F-J.F7LF|L-7.J..F77J-F7LJ.77LF-7L|7-LJ7FF7L7F-J-F7FJLJLJLJL---7||||777F7LFJ|7.-7F7L|FFJJ||JJFJ-J|.
FJJ.FF--7J7|LL7|.|.---LJ|FJ7..F7LJ-J.F7|-F|7.F||F-JF-J7|F7J|JL--F7J7F7F7F-FF7F7LF7||L||-F7||L--7F-7F----J-FJL-7FJ|F|.F77F77.7JFJ7FL-7-F7|-||
-J-FJLJ7|-F|7|L7F|-LL-FJ|.-J7FFFF.LFFL-F---7-FJ|L-7L7F7.--JL|7.L||JFJ|||J-FJLJ|FJLJ|FJ|FJ||L--7|L7|L-7|F7|L7F-JL7|F7.|L7J.F-7F7.|7-L|J.-JFFF
.F-L.|F-J-LJ-L-J7F.F7-77.F|JLL7JF7FFF.FL--7L7L7L-7L7L7|.|L7-F7F7|L7|FJ|||FJF--JL--7|L7||FJL--7||FJL--JFJ|F-JL7|FJ|||F|FJ.F|FJJ-7--J-L7J|LLF7
7-.LL-J.F77L7J7L-L7LJJL7-7LF|-L7||77JFF7.FJFJLL-7|FJFJ77F-|J|||LJFJ||FJL-JFJF7F7LFJ|FJLJL7F--J||L-7F-7|FJ|F--JFL7||L-JL7F-J|J.|JF--7LJ.7JJ.J
|FJ7.L|-77FLJ|7||||7|J.-FJ.F7||FJ|F-7FJ|FJFJF-7FJ||FJJ|F7-|-||L-7L7||L---7|FJ|||FJFJL7F--JL--7||F-JL7LJL7|L7F---JLJF---JL7FJF-77L-7-LFF7LF7|
--J--.7-LFJ.FL-L-7J-7.7L|JF||F7L7||FJ|FJL7|FJFJ|FJ|L7F7|L7F7||77L7||L7JF7|||FJ|||FJF-J|F-7F-7|LJ|F7JL7F7LJFJL----7FJLF--7|L-JFJ-J-J7-LJ|7L-7
L7JLLFJF-7FJ-L7|7LJ7|F|7LFF|LJ|FJ||L7|L-7||L7L7|L7L7LJ||FJ|LJ|F-7|||FJFJLJLJL7|LJL7L-7||FJL7LJF7||L7FJ|L--J.FF7F-JL7FJF-JL7F-JJ|77..-.FFJFJJ
F|J.F7-7-J-L7FJJ7LFFFFJ-||FL7FJL7LJFJL-7|||||FJ|FJFJF-J||7L-7|L7||LJL-JF-----JL7F-JFFJLJL-7L--J|LJFJL7L7F-77FJ|L7F-J|FJF77|L-7L7J.F-JF||-F-7
LJ|F|LFL-LJ-L7JJ|FFJFJ..FF-7||LLL-7L7F-JLJL7|L7|L7L7|F7|L7F7|L7||L----7|F-7F-7FJL--7L7F---JF7F-JF-JF7|FJ|FJFJFJFJ|.FJ|FJL-JF7L-7.F7F7J.L7LJJ
LJ7.|F|L---F|||.77LF7FF7FL7LJL7-F7|FJL---7FJ|FJ|FJFJ||||FJ||L7||L-----J||FJ|FJL7F-7|FJ|F7F7||L7FJ|FJ|||FJL7L7L7L7|FJFJL7F--JL--J7F77-F-7L7L.
LL7-L|F|7|77F7LF77-|L7LFF7L-7FJFJLJL77F--JL7|L-J|FJFJ|||L-J|FJ|L-7F---7LJL7||||LJFJ|L7||LJ|||J||F7|FJ||L7FJL|FJFJLJFJ|FJL-7F--7F-7|J|J.J|L.F
J.|F7.|.LF77F7J||..L7|F7||F7|L7L7F-7L7L---7||F--JL7L-J||F--JL7|F7LJF7L|F--J|L7F-7L7|FJ||F-J||FJLJ||L7|L-J|F-JL7|F7FJF7L7F-J|F-JL7L7FJF-L7J-7
.|||LF..LF7FJ|-||7FFJLJ||||LJFJ-LJ.|FJ|F--J|||-F7-|F--J|L-7F-J||L7L||FJ|F-7|FJ|FJFJ|L7||L7F||L7F-J|FJL--7||F7FJ||LJFJL7|L7FJ|F7FJFJ-.L.F|FLL
|L|JF|F7J||L7|FJL7.L--7|||L-7L7-F7FJL-7L--7||L7||FJL7F7L7FJL-7|L7L-J|L7LJFJ|L-JL-JFJFJLJFJFJ|FJL--JL7F7FJ|||LJFJL7.|F-J|FJ|FJ|||FJJJ--F-|F-|
LFJ7FJ--FJL-JLJF-JF7F-JLJL-7L7L7|||F--JF--JLJFJ|||F-J|L7|L7JFJL7L--7|FJF-J|L7F---7|FJF7FJJL7|L7F7F--J||L7|||F7L-7L7|L7FJL-JL-JLJL7-||FJ-7JLL
F-J7|LL-L-7F7F7L-7||L-----7L7L7S|||L7F7L--7F7L7|LJL-7L7LJFJFJF-JF--J|L7L-7F7LJF--JLJFJLJF7FJL7||LJF7FJL-J|||||F7L7LJFJL7F----7F--JF7F7-7J-7|
F-L-77-|-FJ||||F7LJ|F7|F7-|FJFJ|||L7|||LF7||L7||F---JLL7FJFJFJF7L--7L-JF-J||F7L----7|F7F||L-7|||F7|||F--7||||||L-JF7L--JL--7FJL---JLJL7JJ|L-
77F7.F77-L-J|||||F7LJL-JL-JL7L7LJ|FJLJL7||LJFJLJL7F--7FJ|FJFJFJL7F-JF-7L7FJ|||-F7-FJLJ|FJL7-||||||||LJF-JLJLJLJF--JL-------JL-7F7F7F7FJ7LFLL
LFF|-J|J..LJLJLJ|||F7F-7F7F7L7L-7||F---J||F7L-7F-J|F-JL7|L7|LL-7|L7FJ.|FJL7||L7|L7L-7FJL-7L-JLJLJ|||F7L--7F7F7FJJF7F---------7||||LJLJ-LJF-J
F|J|F-77-7.L|-LLLJLJLJFLJLJL7L7L|LJL7F7FJ||L7.||F7|L7F7||FJL7JFJL7LJF-JL7.|LJFJ|FJF-JL7F7|F7F----J||||F--J|LJLJF-JLJF-7F7F7F-JLJ|L--7JFJ.F-L
FL7J.FFL.LFJ|7L||LLF--7LF-7.L7L7L7F-J||L7LJFJFJ|||L7LJLJ||F7L7|F7|F7L--7L7L7FJFJL7L--7|||LJ|L-7F-7||||L--7L-7F7L7F--JLLJ|||L---7L7F7|.|..JJL
L|||F.|.|-|.L|LLL7|L-7|FJFJF7L7L-JL7FJL7L7FJ-L7LJL7L7F--JLJ|FJLJ||||.F7L7|FJ|FJF-JLF7|||L7FJF-JL7LJ||L7F7|F-J|L-JL--7|F7LJL7F--JFJ|LJ7J-J--7
F-J--|J7F7J7F7F7LF---J|L7|FJL7L--7FJL-7|FJ|F7FJF--J-|L-7F7FJL7F-J||L7||FJ||FJL7|F7FJLJ|L7|L7L--7|F-JL7||LJL--JF7F---JFJL7|FJL7JJL7|7.L|LLL|7
7FFJJ.FJL7LJ-L|J|L---7L-JLJF7L7F7||FF7||L7||||FJF7F7|F-J|||F-JL-7|L7|||L7|||F7||||L--7|-||J|F--J||FF7||L7F--7FJ|L7F7FJF7L7L--J|.L|L77||7..|7
FJ7-J.J.FJ-L.LLJ7F--7L7F-7FJL7LJ||L-JLJL7|||LJ|FJ|||||F-J||L-7F7|L7||||FJ||LJ||||L-7FJL7||FJ|F7FJ|FJ|||FJL-7|L7L7LJLJFJL-JF---7-JL-J.FFF--L|
|F|F|-FF|7-|7|LLFL-7L7LJ.LJF7L-7|L----7FJ|LJF-JL7||LJ||LFJ|F-J|LJJ||LJ||F|L7FJ|||F-JL-7||||FJ||L7||FJ|||F--JL-JJL----JF---JF--JJJF7L-7LJ-F7|
LJ-F7JFFJ|FFF||JF--JFJF7FF-JL--JL-7F7FJL7L-7L7F-J||7FJL7L-JL-7L--7||F-JL7|FJ|FJ|||F-7FJ||LJL7||FJLJL7|LJL--7LF7F----77|F---JF-7F-J|7L|.|.|F-
||7JF-JLL7F|F77JL--7L-JL-JF-7F-7F7LJ|L-7L7FJFJL-7|L7|F7L7F---JF7FJLJL7F7|||FJL7||LJ7||-||F--J|||F7F-J|F---7L7|LJF--7L7||F7F7L7LJF-JJ.JF|FLJJ
FL|FJ-7.7L-F7F7FF7FJF7F-7FJ-LJJLJ|F7L--J7|L7L7F7|L7||||FJL7F-7||L7-F7||LJLJ|F7|LJF7FJL7LJL--7||LJ||F7|L--7L-J|F-JF7L-J|LJLJL7L7FJ7-|L7L7JJF|
|7L|J|-7J-FF7||FJ|L7|LJFJ|F----7-LJL--7F-JFJ7LJ|L7|||||L-7||FJ|L7L7|||L-7FFJ|LJF-JLJF7L7F7F7LJ|F7|LJ||F-7L-7FJ|F7||F--JF7F--JFJL-7--LL.|J.J|
7--|7.LFFFFJ|||L7L7LJF7L-JL---7|F7-F7FJL-7L--7FJFJ||LJ|F-J||L7|FJFJ|LJF7L7L7L-7L7F-7|L7LJLJL7FJ||L7|LJL7L--JL7||||||F--JLJF--JF--J7|FJ-|F7JF
|.FJL.FFF7L7LJL7L7L7FJ|F------JLJL-J|L7F7L7F7|L7L7|L-7|L-7||FJ|L7|-|F7||FJFJF-J7LJFJL7|F-7F-JL7||FJF---JF---7|LJLJLJL----7L7F-JF----777FFJFF
LJ77LFF7||LL-7FJJL7|L7|L7F---------7L-J||LLJLJJL7||F7||F-J||L7|FJL7||||LJ7L7L-7F-7|F7|||FJL7F7LJ|L7L----JF-7LJF7F-7F7F7F7L-JL-7|F---J7-7J|LJ
.|.FFFJLJL---JL-7FJ|FJL7||F--7F-7F7L-7||L---7F--J|||||LJFFJL7LJL7FJLJ||7F77|F-JL7LJ|||LJ|F7LJ|F-JFJF77F7L|FL7FJLJL||LJLJL--7F7LJL---7LL|.F7.
LL7L.|F--------7|L7||F-JLJL-7|L7LJL--JFJF7F7|L-7FJLJ|L--7L--JF--JL-7-|L-JL7||F7FJF7||L-7||L7FJ|F7|FJ|FJL7L-7|L7F7FJL--7F-7JLJL-7F7F-J77.|-|7
.L7J.||JF7F7F--JL-J||L7F77F7|L-JF-----JFJLJ|L7FJL7F7|F7FJ-F--JF7F-7|FJF-7FJ|||LJFJLJ|F-J|L7|L7LJLJL7||F7L-7|L7|||L-7F-J|FJF---7|||||.LJ7|FF.
|J.|-LJFJ|||L---7F7LJFJ|L7|LJF--JF7F7F7|F-7L7||F7||LJ||L-7|F-7|||FJ|L7|FJL7LJL7FJF--JL-7|FJ|FJF-7F-JLJ|L-7LJFJ||L-7|L--JL-JF--J||||-|J.||-L7
|-FJ.F-JFJ|L-7F7LJL-7|-L7|L--JLF7|LJLJ|LJFJJLJLJLJL-7||F-J|L7||LJ|FJFJ|L7FJF--JL7L--7F-J||FJL7L7LJF--7|F-JF7L-J|F-JL-7F-7F7L-77LJLJ-L-7F||F-
|7LJFJF7L7L-7LJ|F7F-JL7FJ|F----JLJF7F7L7FJF7F7FF7F--J||L7FJFJLJF-JL7L7L7|L7|F---JF7FJL7FJ||F-J7L7FJF7LJL--JL7F7|L--77LJ7LJ|F7L-7F77|.L|-|7J7
FLJ.L-JL7L--JF7|||L-7FJ|FJ|F------JLJL7|L7|||L7|||F-7||FJL7L--7|F7FJJL7|L7|||-F--JLJF-JL7||L-7F-J|FJL-------J|||F-7L----7|LJ|F-J||-J7-F.LJ-J
FJF7LL-LL7F--J|LJL--JL-J|-LJF-7F7F7F7FJL-J|||FJ|||L7LJ|L-7L-7FJLJ||LF7|L7||LJFJF-7F7L--7LJ|F-JL--JL---7F-7.F-JLJL7|F---7L--7LJF-J||JJ.LJ-|||
LJ|J-LJJFJ|F--JF---7F7F7L7F7L7LJLJLJLJF---JLJL-J|L7L7|L7FJJFJL7F-JL-J|L7|LJF-JFJFJ|L7F-J7FJL7F7F7|F7F-JL7L-JF7F--J|L--7L7F7L--JF7L7||L.L7LL7
L7|JFJ-FL7|L7F-J-F7||LJL7||L-JF-7F---7|F--------JF|FJF7|L-7|F7|L-7F7FJFJL-7L7FJ|L-JFJL-7FJF-J|||L-JLJF7FJF--J|L--7L---JFJ|L7F--JL-J-JJ-JLLJ|
L|-7F|-|FJ|FJ|F--J|||F--JLJF-7|JLJF--J|L----7F-7F7LJL|||F-JLJLJF-J||L7L7F7|FJL--7F-JF-7|L7L7FJ|L---7FJ||FJF77L--7L----7L-JLLJF7F--7-JFJ7.L77
LLJJ7|7FJFJL-JL--7LJ|L----7|FLJF7LL7F-JF----J|FJ||FF7||LJ-F7F7FJF7|L7L7LJ|||F7F7||F7L7||FJFJL7|.F--J|JLJL-JL---7L7F---JF-7F7FJLJF-J|..L-|-JJ
|JL-JL-|FJ7F---7FJF7|F----J|F--JL-7LJF7L--7F-JL-JL7||||F7FJLJ|L7|||FJFJ.FJ|||||||LJL7||||FJF7|L7|F7FJF-7F------JFLJF--7|FJ|||F--JJ-F-J-7F7..
|.J.|.F|||FL--7LJFJLJ|F-7F7|L7F7F7L--J|F--J|F-----J|LJ||||F-7|FJ|LJL-JJ.L7|||LJLJ-F-J|||LJFJ|L7|LJLJFJFJL-------7F-JF-J||||||L7F7F7-7J||LL77
|7||LFLLJF----JF7L7F7LJ7LJLJJLJLJL-7F7LJF7FJL7F7F7.|F-J|||L7LJL7|7.||7LF7|||L7JF-7|F-JLJF7L7L-JL7F7LL7L--------7LJF7L--JL7|||FJ||||.|-LF-L.L
J--|-|J|LL----7|L7||L-----7F77F----J|L--JLJF7LJLJL7||F-JLJFJF-7|L7F7JL.|LJ|L7L7L7LJL--7FJL-JF7F7LJL--JF-----7F7L--JL7F---J|LJL7||||..LLL.|7.
L-JLLF-7.F7F--JL7||L7F-7F7LJL-JF----JF-7F-7|L---7FJ|||F---JJ|FJ|FJ-J7-FL-7L7L7|-L7F-7FJL-7F7||||F-7F-7|F---7LJL7F7F7LJF-7FJF-7LJLJL--7.|-JJ7
|F|7JF-7FJLJF--7|LJFJ|FJ|L7F7F7|FF---JFJL7|L7F-7|L-JLJL7F7F7|||LJF|LF-JJLL7|JLJF-JL7LJF7FJ|||LJLJ.LJ-LJL-7|L--7LJLJL7-L7LJFJ-L7F----7L-7J|.J
L-.77L7LJF7FJF-JL-7L-JL-J|LJLJ||FJF--7L--JL7||FJ|F7F--7LJLJLJL---77-|7LF.LLJ7LLL---JF-J|L-JLJF----------7L---7|F-7F7L--JF7L--7LJF--7|F-J-|7|
LL|JFLL-7|||FJF7F7L--7F-7F7F7|LJL7|F-JF7JF7LJ||-LJ|L-7L-7F---7F--JJFF|.F7F.LL-JF----JF7|F7F7FJF--------7L--7FJLJLLJ|F7F-JL---JF7L7FJLJJJ-|7|
-7LLJJF-J|||L7|||L7F-JL7LJLJL7F7FLJL--JL-JL--JL7F7L-7L7FJL--7LJJLJ.F-|F|FL7J-LF|F----J||||||L-JF-------JF-7|L----7L|||L7F7F7F7||FJ|F7.LL-|7.
|||FL.L-7|LJ-LJ|L7LJJF7L-7F-7LJL----7F-7F7F7F-7LJL-7L-JL7F-7L-7.J7.LJ.7FJJ||F|FJ|F----JLJLJL7F7L----7F7FJFJL-7F-7L7LJL7LJLJ|||||L7LJL7-7.J7.
LJ-L-FLFJL7LF7JL-JF7FJL--JL7L7F7F7F7LJFJ|||LJ|L7F-7L7F7JLJ7L--J7.|JFLFFFJJ|77FL-JL7F---7F--7||L7-F--J|||FJF7.LJ|L7L-7FJF7F7LJLJL-JF7FJL|7JL|
-JF|7J-L-7|FJL7|F7||L------J|LJ||LJL-7L-J|L--7J|||L7LJL-7.F7F7L|-J-77J.7FFJF-JF---J|F--J|F-J|L7L7L---JLJL-JL7F7F7|F7||FJ|||F-7F7F-JLJJ7JL|.F
|.FFL.-L7LJ|F7L-JLJL-----7F7F--J|F---J-F7|F--JFJ|F7L----JFJLJL-7LL-7JF|L7J.L|.|F---JL---JL-7|FJFJF7F7F7F----J|LJ|LJLJ|L7||||||||L---7F7-JL-J
F7J7-7||FLLLJ|F--7F-----7LJ|L---JL-----J||L7F-JFJ|L---7F7|F---7L7F-F.F|7||-FJ7LJ-|LF7F-----J|L7L7|||||LJF----JF7L--7FJFJ|||L7|||F7F-J--J7L-7
LJ7FFJ7JL|LF7LJF7||F---7L-7L---7F-------J|FJL--JFJF7F-J|LJL--7|FJJ|LLJF77LFL.7.|LFFJLJF7F7F7L7L7|||||L--JF----JL7F7|L-JFJ|L7|||||||-J|FF-.LL
|-LLJJ|L77FJL--JLJ||F-7L--JF7F-JL-----7F7LJF-7F7|FJLJF7|F-7F-JLJ|-J7|FJLF--J7|FL-|L--7|||||L7L-JLJLJL----JF7F7F7LJ|L--7L-J|LJ||||LJ--F7-L7||
F.JLLFJFLFL7F-7F--J||FJF7F-J||F7|F7F--J|L7FJFJ|||||-FJLJL7LJF7F7F7F-L|--J.L|F7F7-JFJL||||LJ||F7F--7F------JLJLJL-7L---JF----7||LJJ7LF||7.LF7
FFJ.L|.|J|7LJJLJF-7LJL7|||F-JLJL-JLJF7F|FJ|FJFJLJL7FJF--7L--JLJLJ|7FJJ.|7F.F-JLL7F|J7LJLJFF7LJLJF-J|F----------7FJF7F7FL7F--J|L7FL|F-L.|J.FJ
LJ7||.-|-FLJ-FF7L7||F7||LJL7F7F7F7F-JL-JL-JL7L7F7FJ|FJF7L------7FJJ7L--L-7.L|F-J-77FFLF-7FJL----JF7||F------7F7LJFJLJL7.||F-7|FJ7LL7-L-F.|JJ
F.|-7L.|-7.FF-JL7||FJ|LJFF7LJLJLJLJF7F7F-7F7L7||LJFJL-JL------7LJJ7|F7LJJ|FLLJ.|LJJ--.L7|L-7F7F7FJ||||F-----J|L7FJF--7|FJ||FJLJ|7F|L-L-J.|F-
FJJ.--L.L|7-L--7||||FJF--JL7F7F7F--J|||L7LJL7LJL--JF------7F-7|-LJ|-FLJFLL77|.F7FLJ7FF7||F-J|||LJ7||LJL-----7|FJ|FJF7LJL7LJL---7-7LJ7.J|F-JJ
L7FLJ7L7JF7FF--JLJLJ|LL---7|||||L--7LJL7L--7|F7F--7L---7F7LJ7||-J-JJ||-7LL7J-L7||-FF-JLJ|L--JLJF-7LJ7F7F---7LJL-JL7|L7F7|F-----J.-.||7|JJ.LJ
.|7J.F7FFJL7L--7F7F7L7FF--JLJ||L--7L7F7L---J|||L-7|F7F7LJL--7LJFJ7JLL7-||F|-|FFF7F7L---7|F7FF7|L7|F7FJLJF7LL7F7F-7||FJ|LJL7FF77|.LL7LL.J.|.|
FL7.||L.|F7L---J|||L7L-JF7F7FJL--7L-J||F7F7|LJL7FJLJLJL7F---JF||.|--||FF777F|FFJ||L7F--J|||FJL--J|||L---JL-7||LJFJLJL-JF7FJFJL---77|F|.|FL-7
J..F----LJL-----JLJFJF7FJ|||L----JF--JLJLJL-7F7LJF----7|L---7-F77J7LF7|||F---7|FJL7|L--7LJLJF---7LJL7F-7F--J|L-7L7F--7FJ|L-JF----J-77.7-J.|7
LJFFJ|FJLJF----7-F7L7|||-LJL7F----JF-----7F7LJL-7|F7F7||F---J7||7-|-F-7||L--7LJ|F7||7F7|F7F-JJF7L7F7|L7|L--7L--JFJL7FJ|FL--7L-7F|7JJFF7||.F7
|.LF--L7JFL-7F7L-JL-J|LJF7F7LJF7F--JF---7|||F7F-J||LJLJLJF----JL7-J|L7|||-F7L-7LJLJL-J|LJLJF7FJL7LJ|L-JL---JFF-7L--JL7L7F7FL--JF-777FF--F.J7
7.LL-.F-.-LLLJL7F7F-7|F-J|||F-JLJF-7|F--J||LJ|L--JL7F7F7J|F--7F-J7-LFJ||L7|L-7L-7F-7F7L7F7.||L-7|F7|F-------7|FJF---7L7LJL----7|FJJ7||L7|LJ|
L7|F|-FJ7-|F7F7LJ||FJ|L-7LJ||F-7FJJLJL--7|L7FJF7F-7LJLJL-J|F7LJ-F77.L7|L7||F-JF7LJ7LJ|FJ|L-J|F-J|||LJF7F---7LJL7|F--J7|F7F7F-7LJL7|-|JFL-|-|
J|-LLF7.-.FJLJL--J|L-JF7|F7|LJFJ|F7F7F--J|FJL-JLJ7L7F7F7F7LJL7F-JL7F-JL-J||L-7|L7F7F7||-L--7|L-7||L-7||L--7L--7LJL---7LJ|||L7L7F7L7|LLJJFF.|
LL-FFLLJLFJF7F-7F7|F--J|LJ|L--JFJ|LJLJF7-LJF7F---7-LJLJLJ|F7FJ|F--JL----7|L7FJL7|||||||F-7J||F-JLJF-J|||F-JF77L7F-7F7L-7LJ|FJJ|||FJ77.|L-|7J
F|-|LLJ-FJFJLJFJ|||L7F7L7FJF7F7L7L----JL-7FJ||F--JF7F--7FLJLJFJ|F7F7F7F-JL-JL7FJLJLJLJ|L7|FJLJF7F7L--JL7L--JL-7LJ7||L7FJF7LJ|FLJLJ-|LFF7|L77
FF7.7.LFL7|J|FJFJ||FJ|L7LJFJ||L7|F-------J|FJ|L--7|||F-JF7F7FL7LJ|||||L---7F-JL------7|L||L--7|||L7F7F7L---7F7L7F7LJFJL-JL---7||7FJLF7|L7|L7
L|-JJ.-JLLJ-FJFJ7||L7|LL-7L7LJ-LJL-77F----JL-JF-7LJLJL--J|||F7L7FJ||||F---JL7JF-7F7F7||FJL---J|LJLLJ||L--7.LJL-J|L7JL--7F----JJJ-7J-LFL--7|.
FFJ|L7J7F7|-|FJF7LJLLJF7FJFJF7F7FF7L-JF7F-7F-7|FJF7F7F---J|LJL7|L7||||L----7L7L7LJLJ||||F7F-7FJF7JF7LJF7-L------JFJF--7||F---7.7.|.|..J.F-L7
||F77|L||FF7LJ7||F7F7FJLJFJFJLJL-JL-7FJ|L7|L7LJL-JLJLJF-7-L--7|L7LJLJL7F-77L7L7L---7LJ|LJ|||LJFJL-JL7.|L---7F--7FJF|F-JLJ|F--J7||-LL-7-FJLF-
LLJLF|.FF-JL--7|LJ|||L---JLL7F---7F7LJFJFJL7L7F7F---77|FJF-7FJL-JF----JL7|F7|FJF7F7L-7L-7LJF--JF-7F7L-JF--7|L-7|L-7|L7F7FJL--7L7|7FJF|-F-LLJ
.|J||L7LL7F--7|L-7||||F7F7F7||F-7LJL-7|FJJLL-J||L7F-JFJL7L7|L-7F7|F7F-7FJLJ||L-J||L7FL-7|F7L---JFJ||F7FJF-JL7FJ|F-J|FJ||L7F--JJJFFJ7LJL7.LJJ
F|-F7F-.LLJ-FJL7FJLJ|FJLJ|||LJ|FJF7F-JLJF7F-7FJL7|L-7|F-JFJ|F7LJ|||LJFJL-7FJ|F-7|L7|F--J||L-7F-7L-JLJ||.L--7LJ7||F7||FJL7||F7F-7-|F7LJL|7--7
FLFJ|J.F.LF-JF7LJF-7LJF-7LJL--J|FJ|L-7F-JLJFJ|F7|L7FJ||F7L7LJ|F-J|L7FJF7FJL7|L7LJF||L--7||F-JL7L7F7F7LJF---JF-7LJ|||||F-J|LJLJFJL-7|FJ-LJ7F|
7J|.|77.77L-7|L-7|FJF7|FJF----7|L7L--J|F---J|LJ||FJ|F|||L7|F-JL-7L7||FJ|L-7||FJLF-JL---JLJ|F-7L7LJLJL77L----JFJF7|||||L7J|F---J|J.LL|7.|-FFJ
--F-J-7JJFJJLJ7FJ|L7||||FJLF7FJL7L----JL7F7F7F-J|L7L7|||FJ|L-7F7|FJ|LJFJF-JLJL-7L-7F---7F-J|FJ-L7F7F7L-7F----JFJ||||LJFJFJ|-F7F7..FJJF---J|L
.F-J.L77FL7FF--JFJ.LJLJLJF-JLJF7L---7F7FJ||||L-7L7L7|||||.L7FJ||||FJF-JJL--7F--JF7LJF--J|JFJ|F7FLJLJ|F-JL----7L7||LJF7L7L7L7|L-7-||.LJ77||FL
L-7..LLL-L7FJF7FJF-7F-7F7L--7FJL-7F7LJLJFJ|||F7L7L7|||||L7FJ|F||||L7|F7F-7FJL--7|L-7L--7L7L7LJ|F7F7FJL------7L-J||F-JL7L-JFJ|F-JF77-.L7-LF7.
LL--|.FJ|--L-J||FJFJL7||L---JL7F-J|L--77L7||LJL7L7LJ||||FJL7L-JLJ||||||L7|L7F--J|F-JF--JFJFJF-J|||||F7F----7|F-7|||F-7|F-7||||F7|L7.7.|..LF7
F-L7L-7F77|.|JLJL7|F-JLJF---7FJL7FJF--JF7|LJF--JJL-7|||||JFJF----JFJLJL7|L7|L7F7||F7L-7FJ.L7L7-||||LJLJF---JLJ-|||||FJ|L7|L7|LJLJFJF7F7--|J|
L7.-JFFLJLF7|FLF-JLJF--7|F--JL-7LJ7|.F7||L7FJF7F7F-JLJLJL7L7L----7L---7|L7|L7|||||||F-J|LF7|FJFJ|||F7F7L------7LJ|LJL7L-JL7LJF--7L7||||7LL.L
LJ-7LLLJ-L|F|7|L--7FJF-J|L--7F-JF--JFJ|||FJL7|LJ|L----7F-JF|F--7FJLF7FJL7||FJ||||||LJF-JFJ|||LL7LJ||||L-7F---7L--JF-7L--7FJF7L-7L7LJLJL7-JF|
||-7LL|J.|.FLF-F--J|JL7FJF7FJ|F7L--7L7|||L7FJL7FJF77F7||JF7||F7LJF7||L7FJ|||FJ||||L-7|F7|FJ||F7|F-J||L-7||7F7L----JFJF--JL7||F-J|L7F7F7|7-F-
F--7..L-|77F-FFL-7FJF-J|FJLJFJ||FF7L7|||L7|L7FJ|FJL7|||L7|||||L7FJ||L7|L7|LJL7||||F7|||||L7|||||L7FJL7FJ|L-JL-----7L7L--7FLJ|L---7LJ||LJ|.FJ
F77|F7-7L--J.F---J|FJF7|L---JFJL-JL-J|||FJL7||-|L-7||||FJ|LJ||LLJF|L7LJ7|L-7-||LJLJ||||||L||LJLJFJ|F-JL7|F7F------JLL--7|F-7|F-7FJ-LLJ.|L-.7
L-JLJ7-|L|F|F|F7F7||FJLJF7.F-JF---7F7|LJ|F-J||FJF7|LJ||L-JF-JL-7F-JFJ7F-JF-JFJL-7F-J||||L7LJJF--JFJL--7|LJ|L----------7|LJFJLJ|||7.FJ7|7-FFJ
|F7..|F|-LLJFJ|LJLJLJF--JL-JF7|F--J||L7FJL-7LJL7||L7J|L7F-JF7F7||F7|F-JF7|F-JF-7|L-7||||FJF--JF7FJ-F--JL77|F-7F7F----7|L-7L---7|L-7JF-F7-7JJ
LFLJ-L-J|JJLL-JJJ.F--JF-7F7FJLJL--7|L7||F7FJJF-J|L7L7|FJ|F7|||||||||L7FJ||L-7L7|L7FJ|LJLJFL-7FJ||F-JF7F7L7LJ-||||F-7FJL-7|F7F7|L7FJJ|-|L7.LJ
LL.LFJJL7.-.LLF7.FL---JFJ||L7|F---JL7LJLJ||F7L-7|.|FJ|L7||||||||||LJFJ||||.FJFJL7|L7L---7F--JL7|||F7|||L7L--7|||LJFJL---JLJLJLJLLJ.F7-F--...
.LF.LJFFJ|FJ.|||7F-7F--JFJL-JFJF7F7FJF---JLJ|F-JL7|L7L-JLJLJLJ|||L7FJFJFJL7|FJF-J|FJF7F7|L7F7FJLJLJLJ|L7|F7FJLJ|F7L-7F-----7LJJ7|L-7J..|.F77
J7|F|FJJF||FLFJL7|FJL7F7|F---JFJLJ||F|F7F---JL7F7|L7L---7F----J|L-JL7L7L7FJLJFL--J|FJ||||JLJ|L----7F-JFJLJ|L-7FJ|L-7LJF7F7FJ7J7JFJ.L-FFJ7LL7
FF|-J-L7LJLJJL-7LJL--J||||F---JF--J|FJ||L----7||LJFJF-7FJL--7F7L7F7FJFJ-|L-7F-7|F7|L7||||F--JF-7F-J|F7L--7L7FJL7L-7L7FJLJ|L---77|J.L7--L--L-
FLJJ|.FL-L-JJFFJF7F7F7|||||F7F7L--7|L-JL7F7F-J||F-JFJFJ|-F--J|L7LJ|L7L-7|F7LJFJFJLJFJ||LJ|F-7|FJL-7LJ|F7FJ7|L7-L--JFJL--7L7F7FJJ-7FJ|L||FF-J
7J|F-77..||7LF|FJLJLJLJ||LJ|LJL---JL7F--J|LJF-J||F7L7L7L7|F-7|FJF7|FJF7|LJ|F-J7L7F7|FJL7FJL7LJL7F7|-FJ||L-7L7L----7|F--7L7||LJ|J|-L-J.7FFJ||
J--F7L77L.-JJL||F--7F--J|F-JF7F7F7F-J|F7FJ7FJF7|||L-JFJFJLJFJ|L7|||L7||L-7||F7F7|||||F7|L7FJF--J|||FJFJ|F-JFL7F7F7||L-7L-J||7L-7L-7J|.L-JLLJ
||L-7LLJF7LL77LJL-7LJF--J|F7||||||L7.LJ|L-7L-J|||L-7-L-JF--JFJFJ|||7||L7FJ|LJLJ|||||LJ|L7|L7L--7||||FJFJL--7FJ|LJLJ|F-J-|LLJ-JFJJ.L-7-...L||
|-J|L7FLL7.FLFJ7LFJF7|F--J|LJLJ||L7L7F-JF7L-7FJ|L7FJF7F7L7F-J.L7||L7LJLLJFJF---J||||F-JFJ|FJ.F7||||||JL7F7FJL7L7F7|LJ.|F77.||.||.FJL--77F-J7
|7F7JL7J-|77LJLLLL7|||L--7|JF--J|FJFJ|F7|L-7|L7L7|L-JLJ|FJ|F---J||FJF7|F7L7L-7F7LJ|||F7|FJL7FJLJ|||LJF-J|LJF7L7LJL-77FFJL7-77F7-.-JJL-JLJ.F-
.|LJ-F-.-|FJFL|L|JLJLJF-7||FJF-7|L7|FJ|||F-J|FJFJL7F7F-JL-JL-7F7||L-JL7|L-JF7LJ|F7||||||L-7|L7F7|LJF7L-7L--JL7|F7F7L--JF-JJL7F-7FL7..||L--7|
-|-..7||J|J|7-77.LLJJJL7LJ|L7|FJ|FJ|L7|||L7FJ|FJ7FJ||L-7F7F--J|||L7F-7||F-7|L7FJ|LJ|||LJF-J|LLJ|L--J|F-JF7F7FJ|||||F---JF|FFFL7FFJJ..FJ7-|L|
LF7FLJLJJ.----J|FF.|L-LL7FJ-LJL-J|FJLLJLJFJL7|L-7L-J|F-J||L-7FJ||FJL7|||L7||FJL7L-7|LJF-JF7L7F7L7F--J|F7|LJLJLLJ|||L-7|LL7-|7-|JL.LF-|F-FJF|
|LJ7|.|77|.L|J7.FLL-JL|F||J|F----J|F-----JF7||F-JF--J|F-JL--J|-LJ|F-JLJ|FJ|||F-JF-JL7FJF7|L7|||F|L--7|||L------7||L-7L7.L|....|FLF-J|LJ.|FF|
F-JL|F--|J-|L77F-J7.FFF-JL-7L--7F7|L7F-7F7||||L-7L---JL-----7L7F-JL-7F-J|FJ||L7FJF7FJL7||||LJ|L-JF7FJ||L7F---7FJLJF-JFJ-7.LL-FFJ|J7.L7LFLJ-7
7JLF|L.F||.F--77-LJFLJL-7F-JJ|J||||FJ|7||||LJ|F7|F----------JFJ|F7F7|L7FJL7||FJL7||L7FJ|||F--JF-7||L7|L7|L--7|L7|.L-7L7.J7F|F7---7|7LJ-L-|7|
|7F-7--LL|-FJ|L|7.|F.FLL||7FL7|||LJ|FJFJ||L-7||LJ|F-7F7F7F7F7|FJ|||||FJL7FJ||L-7||L7||FJ||L7F7|FJ||FJL7||F--J|FJ-JLLL-J.L--JFJ|-LL.77.|7FF-J
F-JF77-L||JL.F.L7-L|77.|LJ7-L|-LJJ-LJJL7|L7FJ|L-7|L7||||||||LJ|FJ||LJ|F-J|FJL7FJLJFJ|LJFJL7||||L7||L-7|||L--7LJ||7..F|7.FJ7.-J7F-..L--7FL77|
LJL7L|--7L77|..LL||LJ.7-FJJF-L|||J-|J7L||FJL7|F7|L-J|||||||L-7LJFJL-7LJF-J|F-J|F-7L-JFFJF7|||LJFJ||F7||||F-7L7-|LF|-L|FJJ.77JL7JLL|77JFF-F-F
7JJ|-JFJ|JL7-|..FL-7JF|.FJ-JF7L7JJFLJ|.LJL7FJ|||L-7FJ||||||F7L-7L7F-JJJ|F7||F7LJFJF|LLL7|LJLJ7||FJ|||||||L7|FJ-----7F|F7FLL|.F|-FF||J.|J7L7|
LFFJJ7..-7|||J.F--JJ.F|-J.-|7|-L.FFJ||-||LLJFJ|L7FJL7|||LJLJL7FJFJ|JJ.LLJLJ|||F7L7JJ|LLLJLF|JF7LJF||LJ|||FJ|L7|L-7J.7-7J7.7|F-7-J7|JFL.-J.FJ
LJLJFL-FFF77..--F7J.L-LJF7.7-J7J.F7J7|-L77.LL7|-LJFLLJLJ7L|-L|L7L-JJ.FFF---J||||FJFF--|LL-77-|LF--JL-7||||-L7|J.-|7F||L-F7LJJ7|7.7J.JF|F|.||
FL7||.77J.|.FJ7FJ|.FL.L-|7F|||LLFJ|LFL-JL7-7L||.|FJ.L|.FF|L7-L7|J-|--LFJF7F7|||||-F7|-|7|FJFF7F|F-7F-JLJ|L7FJ|F7.FJ|L-L-FJ7JF-7|.|L7.L7-777|
-F7-L7FLJF|F7.L|-L-FJF.F|--|FJ.7.-F7-|7|FF--LLJ-||.7J|7F77-|-LLJ.L7|..|FJ|||||||L7|L-.|.F--F-JF||FJL--7FJFJ|FJ7.FJ7LJ.L7L77.L77|JJ7L7F|LJ|F|
F|JF|-JLF7F|.F|J.|-LLF-F|.LJ-7-F-7LL-7LLJ|--FJ7-LLL-7JL7|..F7J-LF-7J7.LJJ||LJ|||FJJ.||J7FJFJJ7JLJL7F7FJ|FJ-LJ77-LJ|LFL-7.|7.|LL|LL|-J7L.LJJJ
-J|7F7J|JLJ|.F7JF7-7-J-F7.|LL-7JL-||LJ|LF77.|7F.|.JFJFF|7---J|.J||F--||-F||J-LJLJJ-|7|.L|F-JJF7L-FLJLJ-LJJ7JL|--7F|-|7.|-FJ--7L7.|.F|7LF--L|
LL7-|L.L7JFJ-L77L7-F-|.LJ-7.|.|-|.L|.F-7L|J-|7JJ|77F|FFJLJ.J7F--FJ7||LLJLLJL7-L.|LLFL|7.L|JFF.-F-JJ..|.F|.J.|.|L|J|.-L-7.JF|.|.|-L7-|-7.LJFF
7||||J7F--J||7.L-7L77-FJJ.-7.-J-LJ.LLJJ-|JLL|J|.7--F-7J-LF-.||J-L|LL.||7LL-FJ..F|F--7|7--7.7L7-|J.F|-F-JJ7.FFJJ7..F|L|-JL7FL.LJ-7LJF-JL||-||
|FL-77-J|-7L7-7LF7FJJ.|J.L|.L|.F7F7LL|-LJ.--JFLLF7---J7--J7|FL|.JL7FLLJ--|7JL--FFJ|J|J|7|.F--|7LFF-L-||L7777.JJF.LFL7L.7LJ-J7.FL7.-J||FLL-77
JLLF---.7.LLJLJ.-JJJF.LJ..|-JL-FLLJ.L|7---J7-F-JJJJL|-J----L--J-.-L-.JJJ.LL.L|JJL-L-J7.FJ.|7-LJFJJ-L|LF-FJ---J.L-JLJ|JLL-JLLL-7-J-L.L7J.|JL|`.split('\n');

function log(u: unknown) {
    console.log(JSON.stringify(u));
}

function findStart(input: string[]): [number, number] {
    for (let i = 0; i < input.length; i++) {
        const j = input[i].indexOf('S');
        if (j != -1) {
            return [i, j];
        }
    }
    throw new Error('no start');
}

function findStartDirection(input: string[], start: [number, number]): [number, number, string] {

    let dir: string = '';

    let result: [number, number, string] | undefined;

    const up = input[start[0] - 1]?.[start[1]];
    if (up === '|' || up === '7' || up === 'F') {
        dir = 'up';
    }

    const down = input[start[0] + 1]?.[start[1]];
    if (down === '|' || down === 'L' || down === 'J') {
        if (dir === 'up') {
            result = [1, 0, '|'];
        } else {
            dir = 'down';
        }
    }

    const left = input[start[0]]?.[start[1] - 1];
    if (left === '-' || left === 'L' || left === 'F') {
        if (dir === 'up') {
            result = [0, -1, 'J'];
        } else if (dir === 'down') {
            result = [0, -1, '7'];
        } else {
            dir = 'left';
        }
    }

    const right = input[start[0]]?.[start[1] + 1];
    if (right === '-' || right === 'J' || right === '7') {
        if (dir === 'up') {
            result = [0, 1, 'L'];
        } else if (dir === 'down') {
            result = [0, 1, 'F'];
        } else if (dir === 'left') {
            result = [0, 1, '-'];
        }
    }

    if (result != null) { return result; }
    throw new Error('no direction from start');

}

function part1(input: string[]) {


    function next(dx: number, dy: number, x: number, y: number) {

        // log({ dx, dy, x, y });
        if (dx == dy) { throw new Error(); }

        const c = input[x][y];
        switch (c) {
            case '|': { return [x += dx, y]; }
            case '-': { return [x, y += dy]; }
            case 'L': { return dx != 0 ? [x, y += 1] : [x - 1, y]; }
            case 'J': { return dx != 0 ? [x, y -= 1] : [x - 1, y]; }
            case '7': { return dx != 0 ? [x, y -= 1] : [x + 1, y]; }
            case 'F': { return dx != 0 ? [x, y += 1] : [x + 1, y]; }
            case 'S': return [-1, -1];
            case '.': throw new Error('sand');
            default: throw new Error('nothing');
        }
    }

    const start = findStart(input);
    log(start);

    // find next
    const direction = findStartDirection(input, start);
    log(direction);

    let step = [start[0] + direction[0], start[1] + direction[1]];

    let current = next(direction[0], direction[1], step[0], step[1]);
    let cnt = 1;
    while (true && cnt < 140 * 140 && current[0] !== -1) {
        cnt++;

        const tmp = next(current[0] - step[0], current[1] - step[1], current[0], current[1]);
        step = current;
        current = tmp;
    }
    log(Math.ceil(cnt / 2));

}


function part2(input: string[]) {

    const pieces: Map<string, string> = new Map();

    function next(dx: number, dy: number, x: number, y: number) {

        // log({ dx, dy, x, y });
        if (dx == dy) { throw new Error(); }

        const c = input[x][y];
        if (c === 'S') { return [-1, -1]; }
        pieces.set(`[${x},${y}]`, c);
        switch (c) {
            case '|': { return [x += dx, y]; }
            case '-': { return [x, y += dy]; }
            case 'L': { return dx != 0 ? [x, y += 1] : [x - 1, y]; }
            case 'J': { return dx != 0 ? [x, y -= 1] : [x - 1, y]; }
            case '7': { return dx != 0 ? [x, y -= 1] : [x + 1, y]; }
            case 'F': { return dx != 0 ? [x, y += 1] : [x + 1, y]; }
            case '.': throw new Error('sand');
            default: throw new Error('nothing');
        }
    }

    const start = findStart(input);
    log(start);

    // find next
    const direction = findStartDirection(input, start);
    log(direction);

    pieces.set(`[${start[0]},${start[1]}]`, direction[2]);

    let step = [start[0] + direction[0], start[1] + direction[1]];

    let current = next(direction[0], direction[1], step[0], step[1]);
    let cnt = 1;
    while (true && cnt < 140 * 140 && current[0] !== -1) {
        cnt++;

        const tmp = next(current[0] - step[0], current[1] - step[1], current[0], current[1]);
        step = current;
        current = tmp;
    }

    // fill
    let fill = 0;
    let output: string[][] = [[]];
    let p = '';
    for (let i = 0; i < input.length; i++) {
        const r = input[i];
        output[i] = [];
        let edges = 0;
        for (let j = 0; j < r.length; j++) {
            const key = `[${i},${j}]`;
            if (!pieces.has(key)) {
                fill += edges % 2;
                output[i][j] = (edges % 2 === 0) ? '.' : 'I';
            } else {
                const c = pieces.get(key);
                output[i][j] = '.';
                if (c == null) { throw new Error('c'); }
                if (c === '|') {
                    edges++;
                }
                if (c === 'J') {
                    if (p === 'F') {
                        edges++;
                    }
                    p = '';
                } else if (c === '7') {
                    if (p === 'L') {
                        edges++;
                    }
                    p = '';
                } else if (c === 'L' || c === 'F') {
                    p = c;
                }
            }
        }
        log(output[i]);
    }
    log(fill);

}
// part2(test_input);;
//part2(test_input2);
part2(puzzle_input)


