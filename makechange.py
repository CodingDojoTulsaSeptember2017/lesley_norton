def makechange(amount):
    quarters = 25
    dimes = 10
    nickels = 5
    pennies = 1
    dollars = 100
    quartersreturned = 0
    dimesreturned = 0
    nickelsreturned = 0
    penniesreturned = 0
    dollarsreturned = 0
    dollarsreturned = amount // dollars
    amount = amount % dollars
    quartersreturned = amount // quarters
    amount = amount % quarters
    dimesreturned = amount // dimes
    amount = amount % dimes
    nickelsreturned = amount // nickels
    amount = amount % nickels
    penniesreturned = amount
    newdictionary = {'dollars' : dollarsreturned, 'quarters': quartersreturned, 'dimes': dimesreturned, 'nickels': nickelsreturned, 'pennies': penniesreturned }
    return newdictionary
    


makechange(76)