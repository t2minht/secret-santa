from twilio.rest import Client
import time
import csv
import random
import datetime

def messageAll(fileName):

    account_sid = "ACc484b52c91d9fe2e4590aa7f3b9c1884"
    
    client = Client(account_sid, auth_token)
    from_number = '+13253088249'
    to_number = '3462549945'

    finalListStr = ""
    filename = "matching18-07-2023_22-57-05.csv"
    with open(filename, "r") as file:
        reader = csv.reader(file)
        for row in reader:
            finalListStr += row[0] + " - " + row[1] + '\n'

    client.messages.create(to=to_number, from_=from_number, body=finalListStr)
    print('Is this matching acceptable?')
    approval = input('Answer y/n: ')
    
    if(approval == 'y'):
        current_time = str(datetime.datetime.now().strftime("%d-%m-%Y_%H-%M-%S"))
        fileName = 'CousinSecretSanta_' +current_time + '.csv'
        with open(fileName, 'w') as f:
            # using csv.writer method from CSV package
            write = csv.writer(f)
            write.writerows(finalList)

        '''for cousin in finalList:
           client.messages.create(to=cousin[2], from_=from_number, body='Hello ' + cousin[0] + ', for the Cousin Secret Santa, you have ' + cousin[4] + ' for Christmas'
                                                                     '\n\n'
                                                                     'The budget is a maximum $50'
                                                                     '\n\n'
                                                                     'This is what they want: ' + cousin[7])'''

        #test code; comment out in prod
        for cousin in finalList:
            print('Hello ' + cousin[0] + ' ' + cousin[2] + ', for the Cousin Secret Santa, you have ' + cousin[4] + ' for Christmas'
                                                                     '\n\n'
                                                                     'The budget is a maximum $50'
                                                                     '\n\n'
                                                                     'This is what they want: ' + cousin[7])