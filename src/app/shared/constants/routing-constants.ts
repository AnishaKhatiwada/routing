export class RoutingConstants {
    static readonly HOME = '';
    static readonly CUSTOMER = 'customer';
    static readonly DETAILS = 'details';
    static readonly CREATE = 'create';
    static readonly HELPER = 'helper';
    static readonly PROVIDER = 'provider';
    static readonly SELECT = 'select';

    static readonly INTERNAL = 'internal';
    static readonly EXTERNAL = 'external';

    // to return string path seperated by '/'
    // static generatePath(...sections: string[]): string {
    //     return sections.reduce((path, section) => `${path}/${section}`, '');
    // }
}