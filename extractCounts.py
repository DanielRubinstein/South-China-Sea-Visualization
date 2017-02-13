import csv


f = open('south-china-sea.csv')
csv_f = csv.reader(f)



def countBetweenCountries(countryA, dateA, dateB):
	dict = {'INDONESIA': 0, 'PHILIPPINES': 0, 'BRUNEI': 0, 'MALAYSIA': 0, 'SINGAPORE': 0, 'VIETNAM': 0, 'TAIWAN, PROVINCE OF CHINA': 0, 'CHINA': 0, 'HONG KONG': 0}
	
	for row in csv_f:
		print row[6]
		if row[1]==countryA and int(row[4])>=dateA and int(row[4])<=dateB and int(row[6])==0:
			dict[row[3]]+=int(row[7])
	for element in dict.keys():
		num=dict[element]
		dict[element]=str(num)
	print dict
	with open(("weighted_conflict_"+countryA+"_"+str(dateA)+"_"+str(dateB)+".csv"),'w') as f:
   		w = csv.writer(f, lineterminator='\n')
   		w.writerow(dict.keys())
   		w.writerow(dict.values())



countBetweenCountries('VIETNAM', 200501, 200901)

