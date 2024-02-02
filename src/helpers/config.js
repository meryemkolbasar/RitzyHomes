export const config = {
    project: {
        name: "Real Estate",
        description: "Our slogan, 'Unlocking Your Home's Potential, Together, reflects our dedication to helping clients realize the full potential of their real estate investments through collaborative and personalized services."
    },
    contact: {
        phone: "+1-123-456-456-65",
        email: "info@realestate.com",
        address: "329 Queensberry Street, North Melbourne VIC 3051, Australia",
    },
    api: {

    },

    pageRoles: { 
        admin: {
            adminAdvertEdit: ["ADMIN"],
            adminAdverts: ["ADMIN"],
            adminAdvertTypes: ["ADMIN"],
            adminCategories: ["ADMIN"],
            adminCategoryEdit: ["ADMIN"],
            adminDashboard: ["ADMIN"],
            adminSettings: ["ADMIN"],
            adminTourRequestDetails: ["ADMIN"],
            adminTourRequests: ["ADMIN"],
            adminUsersEdit: ["ADMIN"],
            adminUsers: ["ADMIN"],
            adminAdvertTypeNew: ["ADMIN"],
            adminAdvertTypeEdit: ["ADMIN"],
            adminCategoryNew: ["ADMIN"],
            adminCategoryEdit: ["ADMIN"],  
            adminCategoryNewPage: ["ADMIN"],  
            adminAdvertTypesPage: ["ADMIN"],  
            adminAdvertTypeNewPage: ["ADMIN"],  
            adminAdvertTypeEditPage: ["ADMIN"], 
            adminUsersPage: ["ADMIN"],  
            adminTourRequestsPage: ["ADMIN"], 
            adminTourRequestDetailsPage: ["ADMIN"],  
            adminContactMessagesListPage: ["ADMIN"],  
            adminContactMessageDetailPage: ["ADMIN"], 
            adminSettingsPage: ["ADMIN"],  
          },
          user: {
            adverts: ["USER"],
            myAdverts: ["USER"],
            myFavorite: ["USER"],
            myTourRequestDetail: ["USER"],
            myTourRequests: ["USER"],
            userMenu: ["USER"],
          },
          common: {
            about: ["ADMIN", "USER"],
            contact: ["ADMIN", "USER"],
            home: ["ADMIN", "USER"],
            profile: ["ADMIN", "USER"],
            register: ["ADMIN", "USER"],
            error401: ["ADMIN", "USER"],
            error404: ["ADMIN", "USER"],
            changePassword: ["ADMIN", "USER"],
            forgotPassword: ["ADMIN", "USER"],
            resetPassword: ["ADMIN", "USER"],
            login: ["ADMIN", "USER"],
            advertDetails: ["ADMIN", "USER"],
            addNewAdvert: ["ADMIN", "USER"],
            editAdvert: ["ADMIN", "USER"],
          },
    }
}