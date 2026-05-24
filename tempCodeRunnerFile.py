phone_number = input("Phone Number: ")
number_mapping = {
    "1": "One",
    "2": "Two",
    "3": "Three",
    "4":"Four",
    "5":"Five",
    "6":"Six",
    "7":"Seven",
    "8":"Eight",
    "9":"Nine",
    "0":"Zero"
}
numbers_in_alphabets = ""
for ch in phone_number:
    numbers_in_alphabets += number_mapping.get(ch,"N/A") + " "
print(numbers_in_alphabets)