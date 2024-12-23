public with sharing class Contacts {
    
	@AuraEnabled(cacheable=true)
	public static List<Contact> getContacts(String firstLetter) {
		List<Contact> myContacts;

		if (String.isEmpty(firstLetter)) {
			myContacts = [
				SELECT Id, Name, Email, Phone
				FROM Contact
				WITH SECURITY_ENFORCED
				ORDER BY Name
			];
		} else {
			String filterVar = firstLetter + '%';
			myContacts = [
				SELECT Id, Name, Email, Phone
				FROM Contact
				WHERE Name LIKE :filterVar
				WITH SECURITY_ENFORCED
				ORDER BY Name
			];
		}
		return myContacts;
	}

    @AuraEnabled
    public static String updateContact(String Id, String FirstName, String LastName) {
        String message;
        Contact contact = new Contact(Id=Id, FirstName=FirstName, LastName=LastName);
        try {
            update contact;
            message = 'Record Updated by Apex';
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
        return message;
    }
}
