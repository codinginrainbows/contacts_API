const ContactsRepository = require("../repositories/ContactsRepository");

class ContactController {
    async index(request, response) {
        const contacts = await ContactsRepository.findAll();

        return response.json(contacts);
    }
    
    async show(request, response) {
        const { id } = request.params;

        const contact = await ContactsRepository.findById(id);

        if (!contact) return response.status(404).json({ error: 'User not found' });

        return response.json(contact);
    }
    
    async store(request, response) {
        const { name, email, phone, category_id } = request.body;

        if (!name) {
            response.status(400).json({ error: 'Name is required' });
        }

        const contactExists = await ContactsRepository.findByEmail(email);

        if (contactExists) {
            response.status(400).json({ error: 'Email already in use' });
        }

        const contact = await ContactsRepository.create(
            name, email, phone, category_id
        );

        return response.json(contact);
    }
    
    update() {

    }
    
    async delete(request, response) {
        const { id } = request.params;

        const contact = await ContactsRepository.findById(id);

        if (!contact) return response.status(404).json({ error: 'User not found' });

        await ContactsRepository.delete(id);
        response.sendStatus(204);
    }
}

module.exports = new ContactController();