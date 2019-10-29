<?php

use Illuminate\Database\Seeder;
use CapstoneLogic\Users\Model\User;
use CapstoneLogic\Users\Model\Role;
use CapstoneLogic\Users\Model\Permission;

class DemoUsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $roleAdmin = Role::create([
            'name'        => 'Admin',
            'slug'        => 'admin',
        ]);

        $roleCustomer = Role::create([
            'name'        => 'Customer',
            'slug'        => 'customer',
        ]);

        $admin = User::create([
            'username' => 'admin',
            'first_name' => 'Admin',
            'last_name' => 'Admin',
            'email' => 'admin@admin.com',
            'password' => bcrypt('admin@admin.com'),
        ]);
        $admin->assignRole('admin');

        $customer = User::create([
            'username' => 'customer',
            'first_name' => 'Customer',
            'last_name' => 'Customer',
            'email' => 'customer@customer.com',
            'password' => bcrypt('customer@customer.com'),
        ]);
        $customer->assignRole('customer');
    }
}
