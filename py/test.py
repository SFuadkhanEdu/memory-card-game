def func(n):
    for i in range(n):
        str = input()
        if str.len() > 10:
            print(str[0] + '' + str.len()-2 +  '' + str[str.len()-1])
        else:
            print(str)

func(int(input()))