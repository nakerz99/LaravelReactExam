<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\DateTimeLog;
use Faker\Generator as Faker;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $a= array("start","stop");
        // DB::table('tblDateTimeLogs')->insert([
        //     'dateTimeLog' => date("Y-m-d H:i:s"),
        //     'status' =>array_rand($a,1),
        // ]);


        // $factory->define(DateTimeLog::class, function (Generator $faker) {
        //     return [
        //         'dateTimeLog' => date("Y-m-d H:i:s"),
        //         'status' =>  $faker->randomElement(['start', 'stop']),
        //     ];
        // });



        $factory->define(DateTimeLog::class, function (Faker $faker) {
            
            return [
                'dateTimeLog' => date("Y-m-d H:i:s"),
                'status' =>  $faker->randomElement(['start', 'stop']),
            ];
        });
    }
}
