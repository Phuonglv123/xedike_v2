class AppUrl {
    home() {
        return '/'
    }

    searchRoute() {
        return '/search-route/'
    }

    createRoute() {
        return '/driver/trips/'
    }

    managerTrip() {
        return `${this.createRoute()}managerTrip/`
    }

    profileDriver() {
        return '/driver/profile/'
    }

    carInfo() {
        return `${this.profileDriver()}carInfo/`
    }

    historyRoute() {
        return `${this.profileDriver()}historyRoute`
    }

    ratePassenger() {
        return `${this.profileDriver()}ratePassenger`
    }


}

export default new AppUrl();
