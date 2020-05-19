<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
class DateTimeLog extends Model
{
    use SoftDeletes;


    protected $table = 'tblDateTimeLogs';
    protected $dates = ['deleted_at'];


}
