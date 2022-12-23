# billApp

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div>
      <h4>Le micro-service Customer qui permet de gérer les clients</h4>
      <h5>application.properties (Customer)</h5>
      <img
        src="./images/properties_customer.png"
        alt="application.properties_customer"
      />
      <h5>CustomerConfig (Customer)</h5>
      <img src="./images/customer_config.png" alt="customer_config" />
    </div>
    <div>
      <h5>
        Le micro-service inventory-service qui permet de gérer les produits
      </h5>
      <h6>application.properties (Inventory)</h6>
      <img
        src="./images/properties_inventories.png"
        alt="application.properties_inventories"
      />
      <h6>ProductConfig (Inventory)</h6>
      <img src="./images/product_config.png" alt="product_config" />
    </div>
    <div>
      <h5>La Gateway Spring cloud Gateway</h5>
      <h6>application.properties (Gateway)</h6>
      <img
        src="./images/properties_gateway.png"
        alt="application.properties_gateway"
      />
    </div>
    <div>
      <h5>Configuration statique du système de Routage</h5>
      <h6>application.yml (Gateway)</h6>
      <img src="./images/config_statique.png" alt="configuration_statique" />
    </div>
    <div>
      <h5>l'annuaire Eureka Discrovery Service</h5>
      <h6>application.properties (Eureka)</h6>
      <img src="./images/eureka_discovery.png" alt="eureka_discoverys" />
    </div>
    <div>
      <h5>Configuration dynamique du système de Routage</h5>
      <h6>GatewayApplication.java (Gateway)</h6>
      <img src="./images/config_dynamique.png" alt="configuration_dynamique" />
    </div>
    <div>
      <h5>le service de facturation Billing-Service en utilisant Open Feign</h5>
      <h6>Entity Bill.java (Billing)</h6>
      <img src="./images/bill_entity.png" alt="bill_entity" />
      <h6>Entity ProductItem.java (Billing)</h6>
      <img src="./images/productItem_entity.png" alt="productItem_entity" />
      <h6>Feign CustomerRestClient.java (Billing)</h6>
      <img src="./images/customer_rest_client.png" alt="customer_rest_client" />
      <h6>Feign ProductItemRestClient.java (Billing)</h6>
      <img
        src="./images/productitem_rest_client.png"
        alt="productItem_rest_client"
      />
      <h6>Controller BillingRestController.java (Billing)</h6>
      <img
        src="./images/billing_rest_controller1.png"
        alt="billing_rest_controller1"
      />
      <img
        src="./images/billing_rest_controller2.png"
        alt="billing_rest_controller2"
      />
      <img
        src="./images/billing_rest_controller3.png"
        alt="billing_rest_controller3"
      />
    </div>
    <div>
      <h5>Déploiement du serveur Keycloak</h5>
      <h6>Realm Bill-realm créé</h6>
      <img src="./images/create_bill_realm.png" alt="bill_realm" />
      <h6>Client Bill-client créé</h6>
      <img src="./images/bill_client_parameters.png" alt="bill_client" />
      <h6>Utilisateurs créé</h6>
      <ul>
        <li>username: User1 | password: 1234 | Role: USER</li>
        <li>username: Imagine | password: 1234 | Role: ADMIN</li>
      </ul>
      <img src="./images/bill_realm_users.png" alt="bill_client_users" />
    </div>
    <div>
      <h5>
        Sécuriser les micro-services et le frontend angular en déployant les
        adaptateurs Keycloak
      </h5>
      <h6>KeycloakAdapter (BackEnd)</h6>
      <img src="./images/keycloak_adapter.png" alt="keycloak_adapter" />
      <h6>
        Mise à jour application.properties dans chaque micro-service (BackEnd)
      </h6>
      <img src="./images/properties_security.png" alt="" />
      <h6>Factory kcFactory (FrontEnd)</h6>
      <img src="./images/factory.png" alt="factory" />
    </div>
    <div>
      <h5>Fonctionnalités Supplémentaires</h5>
      <h6>Exemple de Facturation</h6>
      <img src="./images/facture.png" alt="facture" />
    </div>
  </body>
</html>
