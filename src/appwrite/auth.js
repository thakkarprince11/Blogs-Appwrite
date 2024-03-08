import conf from '../conf/conf'
import { Client, Account, ID } from 'appwrite' // Importing from appwrite

export class AuthService {
    Client = new Client() // creating new client
    account

    constructor() {
        this.Client.setEndpoint(conf.appwriteUrl).setProject(
            conf.appwriteProjectId
        )

        this.account = new Account(this.Client)
    }

    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                // call another method
                return this.login({email, password});
            } else {
               return  userAccount;
            }
        } catch (error) {
            console.log(error);
        }
    }

    async login({ email, password }) {
        try {
            return await this.account.createEmailSession(email, password);
        } catch (error) {
            console.log(error);
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite serive :: getCurrentUser :: error", error);
        }

        return null;
    }

    async logout() {
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite serive :: logout :: error", error);
        }
    }
} // Creating a Class

const authService = new AuthService() // Creating Object from Class

export default authService // exporting Object of the class
